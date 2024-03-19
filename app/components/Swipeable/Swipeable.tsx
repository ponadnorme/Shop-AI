'use client';

import {useRef, useState} from "react";

const Swipeable = ({ children }: {
  children: React.ReactNode,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    let touchX: number;

    if (event instanceof MouseEvent) {
      touchX = event.pageX;
    } else {
      touchX = event.touches[0].clientX;
    }

    const deltaX = touchX - startX;
    let newTranslateX = translateX + deltaX;

    if (newTranslateX < 0) {
      newTranslateX = 0;
    }

    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }

    setTranslateX(newTranslateX);
    setStartX(touchX);
  };

  const handleStart = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    let touchX: number;

    if ('touches' in event.nativeEvent) {
      touchX = event.nativeEvent.touches[0].clientX;
    } else {
      touchX = event.nativeEvent.pageX;
    }

    setStartX(touchX);
    // setTranslateX(translateX);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }

    // Add global event listeners
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
  };

  const handleEnd = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }

    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleEnd);
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleEnd);

    setStartX(0);
    // setTranslateX(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchEnd={handleEnd}
      style={{
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'pan-y',
    }}
    >
      <div ref={contentRef} style={{ display: 'flex', transition: 'transform 0.3s ease-out' }}>
        {children}
      </div>
    </div>
  );
};

export default Swipeable;
