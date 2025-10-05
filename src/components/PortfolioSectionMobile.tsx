import { useState, useEffect } from 'react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioSectionMobile = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const portfolioItems = [
    { id: 1, image: portfolio1, label: 'ccrd website', alt: 'Creative card website design with colorful collage' },
    { id: 2, image: portfolio2, label: 'ccrd website', alt: 'Modern logistics website interface' },
    { id: 3, image: portfolio3, label: 'ccrd website', alt: 'Independent brand identity design' },
    { id: 4, image: portfolio4, label: 'ccrd website', alt: 'Abstract creative photography project' },
  ];

  // Duplicate items for infinite scroll
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

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
    const speed = 0.3; // pixels per frame (slower for mobile)
    const itemHeight = 200 + 8 + 20; // approximate height for mobile
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
    <section className={`md:hidden py-12 px-6 bg-background overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="font-poppins text-3xl font-medium text-foreground mb-8">Portfolio</h2>
      
      <div className="flex justify-center">
        <div 
          className="flex flex-col gap-2 items-center"
          style={{
            transform: `translateY(-${scrollY}px)`,
            transition: 'none'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col items-center gap-1"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-[280px] h-[210px] object-cover shadow-lg"
              />
              <p className="font-poppins text-[13px] font-normal text-foreground text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionMobile;
