import { useState, useEffect, useRef } from 'react';

const PortfolioSeeMoreCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaRef.current) return;
      
      const portfolioSection = document.querySelector('[data-section="portfolio-works"]');
      if (!portfolioSection) return;
      
      const rect = portfolioSection.getBoundingClientRect();
      const isInSection = 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;
      
      if (!isInSection) {
        setIsVisible(false);
        return;
      }
      
      // Check if hovering over any portfolio images
      const mainImages = portfolioSection.querySelectorAll('img[alt*="Design Website"], img[alt*="Logistic Website"]');
      const carouselImages = portfolioSection.querySelectorAll('img[alt*="Portfolio item"]');
      const allImages = [...Array.from(mainImages), ...Array.from(carouselImages)];
      
      let isHoveringImage = false;
      allImages.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        if (
          e.clientX >= imgRect.left &&
          e.clientX <= imgRect.right &&
          e.clientY >= imgRect.top &&
          e.clientY <= imgRect.bottom
        ) {
          isHoveringImage = true;
        }
      });
      
      if (isHoveringImage) {
        setIsVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        see<br />more
      </span>
    </div>
  );
};

export default PortfolioSeeMoreCTA;
