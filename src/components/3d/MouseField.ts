import { useRef, useEffect } from "react";
import * as THREE from "three";

export interface MouseFieldState {
  coords: THREE.Vector2;
  active: boolean;
  strength: number;
  parallax: THREE.Vector2;
}

export function useMouseField(containerRef: React.RefObject<HTMLDivElement | null>) {
  const mouseState = useRef<MouseFieldState>({
    coords: new THREE.Vector2(0, 0),
    active: false,
    strength: 0,
    parallax: new THREE.Vector2(0, 0),
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // NDC space (-1 to 1)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouseState.current.coords.set(x, y);
      mouseState.current.active = true;

      // Parallax values
      mouseState.current.parallax.set(
        (e.clientX / window.innerWidth - 0.5) * 0.3,
        (e.clientY / window.innerHeight - 0.5) * 0.3
      );
    };

    const handleMouseLeave = () => {
      mouseState.current.active = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);

  return mouseState;
}
