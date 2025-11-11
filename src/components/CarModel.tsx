import { useEffect, useRef, useMemo, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";

const darkMaterialProps = {
  color: "#1a1a1a",
  metalness: 0.6,
  roughness: 0.4,
  envMapIntensity: 1.5,
};

const backgroundMaterial = new THREE.MeshStandardMaterial({
  color: "#666666",
  metalness: 0.3,
  roughness: 0.8,
  transparent: true,
  opacity: 0.05,
  depthWrite: false,
  blending: THREE.NormalBlending,
});

interface CarModelProps {
  highlightedPart: string | null;
  isAutoRotating: boolean;
  [key: string]: any;
}

export function CarModel({
  highlightedPart,
  isAutoRotating,
  ...props
}: CarModelProps) {
  const { nodes } = useGLTF("/3d_models/IEM25_COMPRESSED.glb");

  const groupRef = useRef<THREE.Group | null>(null);
  const backgroundRef = useRef<THREE.Group | null>(null);
  const rotationRef = useRef<THREE.Group | null>(null);
  const rotationTween = useRef<gsap.core.Tween | null>(null);
  const preFocusRotation = useRef<number>(0);

  const diffuserRef = useRef<THREE.Mesh | null>(null);
  const spoilerRef = useRef<THREE.Mesh | null>(null);
  const wingRef = useRef<THREE.Mesh | null>(null);
  const venturiRef = useRef<THREE.Mesh | null>(null);

  const diffuserMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const spoilerMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const wingMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const venturiMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);

  const groupPosition: [number, number, number] = [-40, 27, -10];
  const rotationSpeed = 20;

  useEffect(() => {
    if (!rotationRef.current) return;
    if (rotationTween.current) rotationTween.current.kill();

    if (highlightedPart) {
      preFocusRotation.current = rotationRef.current.rotation.z;
      const targetZ =
        Math.round(preFocusRotation.current / (Math.PI * 2)) * (Math.PI * 2);

      rotationTween.current = gsap.to(rotationRef.current.rotation, {
        z: targetZ,
        duration: 1.0,
        ease: "power3.inOut",
      });
    } else if (isAutoRotating) {
      if (rotationRef.current) {
        rotationTween.current = gsap.to(rotationRef.current.rotation, {
          z: `+=${Math.PI * 2}`,
          duration: rotationSpeed,
          ease: "none",
          repeat: -1,
        });
      }
    }
  }, [isAutoRotating, highlightedPart]);

  const isAnythingHighlighted = highlightedPart !== null;
  const getMaterialProps = (partName: string) => {
    const isHighlighted = highlightedPart === partName;
    return {
      transparent: isAnythingHighlighted && !isHighlighted,
      opacity: isAnythingHighlighted && !isHighlighted ? 0.15 : 1.0,
      depthWrite: !isAnythingHighlighted || isHighlighted,
    };
  };

  const diffuserProps = useMemo(
    () => getMaterialProps("DIFFUSER"),
    [highlightedPart]
  );
  const spoilerProps = useMemo(
    () => getMaterialProps("FRONT_SPOILER"),
    [highlightedPart]
  );
  const wingProps = useMemo(
    () => getMaterialProps("REAR_WING"),
    [highlightedPart]
  );
  const venturiProps = useMemo(
    () => getMaterialProps("VENTURI"),
    [highlightedPart]
  );

  useLayoutEffect(() => {
    if (diffuserMaterialRef.current) {
      diffuserMaterialRef.current.transparent = diffuserProps.transparent;
      diffuserMaterialRef.current.opacity = diffuserProps.opacity;
      diffuserMaterialRef.current.depthWrite = diffuserProps.depthWrite;
    }
  }, [diffuserProps]);

  useLayoutEffect(() => {
    if (spoilerMaterialRef.current) {
      spoilerMaterialRef.current.transparent = spoilerProps.transparent;
      spoilerMaterialRef.current.opacity = spoilerProps.opacity;
      spoilerMaterialRef.current.depthWrite = spoilerProps.depthWrite;
    }
  }, [spoilerProps]);

  useLayoutEffect(() => {
    if (wingMaterialRef.current) {
      wingMaterialRef.current.transparent = wingProps.transparent;
      wingMaterialRef.current.opacity = wingProps.opacity;
      wingMaterialRef.current.depthWrite = wingProps.depthWrite;
    }
  }, [wingProps]);

  useLayoutEffect(() => {
    if (venturiMaterialRef.current) {
      venturiMaterialRef.current.transparent = venturiProps.transparent;
      venturiMaterialRef.current.opacity = venturiProps.opacity;
      venturiMaterialRef.current.depthWrite = venturiProps.depthWrite;
    }
  }, [venturiProps]);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = backgroundMaterial.clone();
        }
      });
    }
  }, [nodes]);

  return (
    <group ref={rotationRef} {...props}>
      <group
        ref={groupRef}
        dispose={null}
        rotation={[0, 0, -Math.PI / 6]}
        position={groupPosition}
      >
        <Select enabled={highlightedPart === "DIFFUSER"}>
          <mesh
            ref={diffuserRef}
            geometry={(nodes.DIFFUSER as THREE.Mesh).geometry}
          >
            <meshStandardMaterial
              ref={diffuserMaterialRef}
              {...darkMaterialProps}
            />
          </mesh>
        </Select>

        <Select enabled={highlightedPart === "FRONT_SPOILER"}>
          <mesh
            ref={spoilerRef}
            geometry={(nodes.FRONT_SPOILER as THREE.Mesh).geometry}
          >
            <meshStandardMaterial
              ref={spoilerMaterialRef}
              {...darkMaterialProps}
            />
          </mesh>
        </Select>

        <Select enabled={highlightedPart === "REAR_WING"}>
          <mesh
            ref={wingRef}
            geometry={(nodes.REAR_WING as THREE.Mesh).geometry}
          >
            <meshStandardMaterial
              ref={wingMaterialRef}
              {...darkMaterialProps}
            />
          </mesh>
        </Select>

        <Select enabled={highlightedPart === "VENTURI"}>
          <mesh
            ref={venturiRef}
            geometry={(nodes.VENTURI as THREE.Mesh).geometry}
          >
            <meshStandardMaterial
              ref={venturiMaterialRef}
              {...darkMaterialProps}
            />
          </mesh>
        </Select>

        <primitive
          ref={backgroundRef}
          object={nodes.CH_25_FULL_CAR_ASM}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d_models/IEM25_COMPRESSED.glb");
