"use client";

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineWrapper({ scene }: { scene: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Recursive check to see if an element or any of its descendants contain a CANVAS element
    const hasCanvasDescendant = (node: Element | ShadowRoot): boolean => {
      if (node instanceof Element && node.tagName === 'CANVAS') {
        return true;
      }
      if (node instanceof Element && node.shadowRoot) {
        if (hasCanvasDescendant(node.shadowRoot)) return true;
      }
      let found = false;
      node.childNodes.forEach((child) => {
        if (child instanceof Element) {
          if (hasCanvasDescendant(child)) found = true;
        }
      });
      return found;
    };

    const hideWatermark = () => {
      const scanElement = (el: Element | ShadowRoot) => {
        if (el instanceof Element) {
          // 1. Target anchor links pointing to spline
          if (el.tagName === 'A') {
            const anchor = el as HTMLAnchorElement;
            if (anchor.href && (anchor.href.includes('spline.design') || anchor.href.includes('spline'))) {
              anchor.style.setProperty('display', 'none', 'important');
              anchor.style.setProperty('opacity', '0', 'important');
              anchor.style.setProperty('visibility', 'hidden', 'important');
              anchor.style.setProperty('pointer-events', 'none', 'important');
            }
          }

          // 2. Target the watermark container.
          // Safety Check: Never hide the CANVAS itself, and never hide any element that contains a CANVAS descendant.
          if (el.tagName !== 'CANVAS' && !hasCanvasDescendant(el)) {
            const hasLogoId = el.id === 'logo';
            const hasLogoClass = typeof el.className === 'string' && 
              (el.className.includes('logo') || el.className.includes('spline') || el.className.includes('watermark'));
            const hasSplineText = el.textContent && el.textContent.trim() === 'Built with Spline';

            if (hasLogoId || hasLogoClass || hasSplineText) {
              (el as HTMLElement).style.setProperty('display', 'none', 'important');
              (el as HTMLElement).style.setProperty('opacity', '0', 'important');
              (el as HTMLElement).style.setProperty('visibility', 'hidden', 'important');
              (el as HTMLElement).style.setProperty('pointer-events', 'none', 'important');
            }
          }

          // 3. Pierce Shadow DOM if present
          if (el.shadowRoot) {
            scanElement(el.shadowRoot);
          }
        }

        // 4. Recurse through all child nodes
        el.childNodes.forEach((node) => {
          if (node instanceof Element) {
            scanElement(node);
          }
        });
      };

      // Scan globally from the body
      if (document.body) {
        scanElement(document.body);
      }

      // Scan all potential shadow hosts in the document
      const allElements = document.querySelectorAll('*');
      allElements.forEach((el) => {
        if (el.shadowRoot) {
          scanElement(el.shadowRoot);
        }
      });
    };

    // Poll to catch elements as they asynchronously render
    const intervalId = setInterval(hideWatermark, 100);

    // Watch for DOM mutations globally to ensure it stays hidden
    const observer = new MutationObserver(hideWatermark);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Run immediately
    hideWatermark();

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <Spline scene={scene} />
    </div>
  );
}
