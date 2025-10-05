import { useState, useEffect, useRef } from 'react';

const CircularCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 50px (when content sections start)
      setIsScrolledPastHero(window.scrollY >= 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaRef.current || !isScrolledPastHero) return;
      
      // Define center area: 665x509 polygon
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const polygonWidth = 665;
      const polygonHeight = 509;
      
      // Check if mouse is within the center polygon
      const isInCenterArea = 
        e.clientX >= centerX - polygonWidth / 2 &&
        e.clientX <= centerX + polygonWidth / 2 &&
        e.clientY >= centerY - polygonHeight / 2 &&
        e.clientY <= centerY + polygonHeight / 2;
      
      if (isInCenterArea) {
        setIsVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isScrolledPastHero]);

  if (!isScrolledPastHero) return null;

  return (
    <div
      ref={ctaRef}
      className={`fixed z-30 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
      }`}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#93BD60',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span className="font-poppins text-white text-[14px] font-semibold text-center leading-tight">
        check<br />out
      </span>
    </div>
  );
};

export default CircularCTA;
