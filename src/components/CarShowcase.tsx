import React, {Suspense, useEffect, useRef} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing';
import { CarModel } from './CarModel';
import gsap from 'gsap';

const CAMERA_POSITIONS = {
    DEFAULT: { position: [0, -100, 30], target: [0, 0, 0] },
    DIFFUSER: { position: [-50, 75, -10], target: [-50, 0, 0] },
    FRONT_SPOILER: { position: [-50, -10, 80], target: [0, -15, 30] },
    REAR_WING: { position: [-20, -30, 20], target: [-20, 0, 20] },
    VENTURI: { position: [-10, -100, 50], target: [0, 2, 0] },
};

function CameraRig({ highlightedPart }: { highlightedPart: string | null }) {
    const { camera, controls } = useThree();
    const prevHighlightedPart = useRef<string | null>(null);

    useEffect(() => {
        if (!controls) return;

        const cfg =
            highlightedPart && CAMERA_POSITIONS[highlightedPart]
                ? CAMERA_POSITIONS[highlightedPart]
                : CAMERA_POSITIONS.DEFAULT;

        const isFocusing = !prevHighlightedPart.current && highlightedPart;
        const animationDelay = 0;

        gsap.killTweensOf(camera.position);
        gsap.killTweensOf(controls.target);

        gsap.to(camera.position, {
            duration: 1.8,
            ease: 'power3.inOut',
            x: cfg.position[0],
            y: cfg.position[1],
            z: cfg.position[2],
            delay: animationDelay,
        });

        gsap.to(controls.target, {
            duration: 1.8,
            ease: 'power3.inOut',
            x: cfg.target[0],
            y: cfg.target[1],
            z: cfg.target[2],
            delay: animationDelay,

            onUpdate: () => {
                if (controls) controls.update();
            },
        });

        prevHighlightedPart.current = highlightedPart;

    }, [highlightedPart, camera, controls]);

    return null;
}

interface CarShowcaseProps {
    highlightedPart: string | null;
    isAutoRotating: boolean;
}

export function CarShowcase({ highlightedPart, isAutoRotating }: CarShowcaseProps) {
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
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
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
                <directionalLight position={[-6, 8, -4]} intensity={3} color="#a0c8ff" />
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
                            visibleEdgeColor="white"
                            hiddenEdgeColor="white"
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