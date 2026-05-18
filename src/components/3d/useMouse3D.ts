import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export interface MouseState {
  position: THREE.Vector3;
  targetStrength: number;
}

export function useMouse3D() {
  const { camera, gl } = useThree();
  
  const mouseState = useRef<MouseState>({
    position: new THREE.Vector3(0, 0, 0),
    targetStrength: 0.0,
  });

  useEffect(() => {
    // Automatically query the Canvas container wrapper DOM node
    const el = gl.domElement.parentElement;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Unproject pointer position to a 3D point on the plane parallel to camera at z = 0
      const vec = new THREE.Vector3(x, y, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      
      // Calculate intersection distance to the Z = 0 depth plane of the sphere
      const dist = -camera.position.z / dir.z;
      
      mouseState.current.position.copy(camera.position).add(dir.multiplyScalar(dist));
    };

    const handlePointerEnter = () => {
      mouseState.current.targetStrength = 1.0;
    };

    const handlePointerLeave = () => {
      mouseState.current.targetStrength = 0.0;
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerenter", handlePointerEnter);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerenter", handlePointerEnter);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [camera, gl]);

  return mouseState;
}
