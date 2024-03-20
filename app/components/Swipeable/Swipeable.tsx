'use client';

import {useRef} from "react";

const Swipeable = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const handleMove = (startX, initialTranslateX) => (event) => {
    let touchX;

    if (event instanceof MouseEvent) {
      touchX = event.pageX;
    } else {
      touchX = event.touches[0].clientX;
    }

    const deltaX = touchX - startX;
    let newTranslateX = initialTranslateX + deltaX;

    const maxTranslateX = containerRef.current.offsetWidth - contentRef.current.offsetWidth;

    if (newTranslateX < maxTranslateX) {
      newTranslateX = maxTranslateX;
    }

    if (newTranslateX > 0) {
      newTranslateX = 0;
    }

    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }
  };

  const handleStart = (event) => {
    event.preventDefault();
    let touchX;

    if ('touches' in event) {
      touchX = event.touches[0].clientX;
    } else {
      touchX = event.clientX;
    }

    const initialTranslateX = contentRef.current ? parseInt(contentRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0 : 0;

    const moveHandler = handleMove(touchX, initialTranslateX);

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }

    const endHandler = () => {
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }

      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', endHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('touchend', endHandler);
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', endHandler);
    window.addEventListener('touchmove', moveHandler);
    window.addEventListener('touchend', endHandler);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      style={{
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'pan-x',
      }}
    >
      <div ref={contentRef} style={{ display: 'flex', transition: 'transform 0.3s ease-out', minWidth: 'max-content' }}>
        {children}
      </div>
    </div>
  );
};

export default Swipeable;
