'use client';

import React, {useRef} from "react";

const Swipeable = ({children}: {
  children: React.ReactNode,
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const handleMove = (startX: number, initialTranslateX: number) => (event: MouseEvent | TouchEvent) => {
    let touchX;

    if (event instanceof MouseEvent) {
      touchX = event.pageX;
    } else {
      touchX = event.touches[0].clientX;
    }

    const deltaX = touchX - startX;
    let newTranslateX = initialTranslateX + deltaX;

    if (!containerRef.current || !contentRef.current) {
      return;
    }

    const containerRefElement = containerRef.current as HTMLDivElement;
    const contentRefElement = contentRef.current as HTMLDivElement;
    const maxTranslateX = containerRefElement.offsetWidth - contentRefElement.offsetWidth;

    if (newTranslateX < maxTranslateX) {
      newTranslateX = maxTranslateX;
    }

    if (newTranslateX > 0) {
      newTranslateX = 0;
    }

    contentRefElement.style.transform = `translateX(${newTranslateX}px)`;
  };

  const handleStart = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!containerRef.current || !contentRef.current) {
      return;
    }

    const containerRefElement = containerRef.current as HTMLDivElement;
    const contentRefElement = contentRef.current as HTMLDivElement;

    let touchX;

    if ('touches' in event) {
      touchX = event.touches[0].clientX;
    } else {
      touchX = event.clientX;
    }

    const initialTranslateX = parseInt(contentRefElement.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

    const moveHandler = handleMove(touchX, initialTranslateX);

    containerRefElement.style.cursor = 'grabbing';

    const endHandler = () => {
      containerRefElement.style.cursor = 'grab';

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
