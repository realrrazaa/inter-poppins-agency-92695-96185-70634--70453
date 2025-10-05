import { useState, useEffect, useRef } from 'react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    { id: 1, image: portfolio1, label: 'ccrd website', alt: 'Creative card website design with colorful collage' },
    { id: 2, image: portfolio2, label: 'ccrd website', alt: 'Modern logistics website interface' },
    { id: 3, image: portfolio3, label: 'ccrd website', alt: 'Independent brand identity design' },
    { id: 4, image: portfolio4, label: 'ccrd website', alt: 'Abstract creative photography project' },
  ];

  // Duplicate items for infinite scroll
  const duplicatedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  // Handle mouse movement for following cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  // Check if still on hero page - disappear as soon as we start scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous downward scroll animation
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.5; // pixels per frame
    const itemHeight = 268 + 8 + 22; // image height + gap + label height
    const resetPoint = itemHeight * portfolioItems.length;

    const animate = () => {
      setScrollY((prev) => {
        const newY = prev + speed;
        return newY >= resetPoint ? newY - resetPoint : newY;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [portfolioItems.length]);

  if (!isVisible) return null;

  return (
    <aside 
      id="portfolio" 
      ref={sectionRef}
      className={`fixed right-0 top-0 h-screen md:flex items-center pr-0 z-30 pointer-events-none hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center h-full pointer-events-auto overflow-hidden pr-8">
        {/* Portfolio Stack with infinite scroll */}
        <div 
          className="flex flex-col gap-2"
          style={{
            transform: `translateY(-${scrollY}px)`,
            transition: 'none'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex flex-col items-center gap-1"
            >
              {/* Portfolio image - 357x268 */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-[357px] h-[268px] object-cover shadow-lg"
              />
              
              {/* Text label underneath image */}
              <p className="font-poppins text-[15px] font-normal text-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Green CTA Button that follows mouse exactly */}
      <div
        className={`fixed rounded-full bg-accent flex items-center justify-center text-accent-foreground font-poppins font-semibold text-sm text-center leading-tight shadow-xl pointer-events-none z-50 transition-all ${
          isHovering ? 'w-[100px] h-[100px] opacity-100 scale-100 duration-200 ease-out' : 'w-[20px] h-[20px] opacity-0 scale-0 duration-150 ease-in'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, opacity'
        }}
      >
        {isHovering && (
          <>
            see<br />portfolio
          </>
        )}
      </div>
    </aside>
  );
};

export default PortfolioSection;
