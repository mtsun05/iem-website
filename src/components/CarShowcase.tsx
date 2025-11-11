import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import { CarModel } from "./CarModel";
import gsap from "gsap";

const CAMERA_POSITIONS: Record<string, CameraPosiionValue> = {
  DEFAULT: { position: [0, -100, 30], target: [0, 0, 0] },
  DIFFUSER: { position: [-35, 75, -10], target: [-35, 0, 0] },
  FRONT_SPOILER: { position: [25, -50, 20], target: [25, -30, 5] },
  REAR_WING: { position: [-30, -40, 30], target: [-30, 0, 20] },
  VENTURI: { position: [-10, -50, 50], target: [0, 0, 0] },
};

type CameraPosition = keyof typeof CAMERA_POSITIONS;
type CameraPosiionValue = Record<string, [number, number, number]>;

function CameraRig({
  highlightedPart,
}: {
  highlightedPart: CameraPosition | null;
}) {
  const { camera, controls } = useThree();
  const orbitControls = controls as OrbitControlsType | undefined;
  const prevHighlightedPart = useRef<string | null>(null);

  useEffect(() => {
    if (!orbitControls) return;

    const cfg =
      highlightedPart && CAMERA_POSITIONS[highlightedPart]
        ? CAMERA_POSITIONS[highlightedPart]
        : CAMERA_POSITIONS.DEFAULT;

    const animationDelay = 0;

    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(orbitControls.target);

    gsap.to(camera.position, {
      duration: 1.8,
      ease: "power3.inOut",
      x: cfg.position[0],
      y: cfg.position[1],
      z: cfg.position[2],
      delay: animationDelay,
    });

    gsap.to(orbitControls.target, {
      duration: 1.8,
      ease: "power3.inOut",
      x: cfg.target[0],
      y: cfg.target[1],
      z: cfg.target[2],
      delay: animationDelay,

      onUpdate: () => {
        if (controls) orbitControls.update();
      },
    });

    prevHighlightedPart.current = highlightedPart;
  }, [highlightedPart, camera, orbitControls]);

  return null;
}

interface CarShowcaseProps {
  highlightedPart: CameraPosition | null;
  isAutoRotating: boolean;
}

export function CarShowcase({
  highlightedPart,
  isAutoRotating,
}: CarShowcaseProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <Canvas
        shadows
        gl={{ alpha: true }}
        camera={{
          position: CAMERA_POSITIONS.DEFAULT.position,
          fov: 50,
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <ambientLight intensity={0.6} color="#fff1e0" />
        <directionalLight
          position={[10, 10, 5]}
          intensity={8}
          color="#ffdcb0"
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight
          position={[-6, 8, -4]}
          intensity={3}
          color="#a0c8ff"
        />
        <pointLight position={[0, 15, 10]} intensity={5} color="#fff2cc" />

        <Environment preset="studio" background={false}>
          <Lightformer
            form="rect"
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 10, 0]}
            scale={[20, 20, 1]}
            color="#fff3e0"
          />
          <Lightformer
            form="rect"
            intensity={1.5}
            position={[8, 4, 0]}
            scale={[10, 10, 1]}
            color="#ffdfc4"
          />
        </Environment>

        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline
              blur
              visibleEdgeColor={0xffffff}
              hiddenEdgeColor={0xffffff}
              edgeStrength={50}
              width={2500}
              xRay={true}
            />
          </EffectComposer>

          <Suspense fallback={null}>
            <CarModel
              highlightedPart={highlightedPart}
              isAutoRotating={isAutoRotating}
              scale={0.8}
              position={[0, 0, 0]}
            />
          </Suspense>
        </Selection>

        <OrbitControls makeDefault enabled={false} />

        <CameraRig highlightedPart={highlightedPart} />
      </Canvas>
    </div>
  );
}
