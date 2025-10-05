import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import sideCharacter from '@/assets/side-character.png';

const PortfolioWorksSection = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mainWorks = [
    { id: 1, image: portfolio1, caption: 'Design Website' },
    { id: 2, image: portfolio2, caption: 'Logistic Website' },
  ];

  const carouselItems = [
    portfolio3, portfolio4, portfolio1, portfolio2, 
    portfolio3, portfolio4, portfolio1, portfolio2,
    portfolio3, portfolio4, portfolio1, portfolio2
  ];

  // Intersection observer for button fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsButtonVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Horizontal scroll animation
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.5;
    const itemWidth = 142 + 10; // image width + gap
    const resetPoint = itemWidth * 4; // Reset after 4 items

    const animate = () => {
      setScrollX((prev) => {
        const newX = prev + speed;
        return newX >= resetPoint ? newX - resetPoint : newX;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Decorative side character - desktop only, aligned with logistics image */}
      <img
        src={sideCharacter}
        alt="Decorative character"
        className="hidden lg:block absolute right-12 w-48 h-auto z-10 pointer-events-none"
        style={{ top: '140px' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading with wavy underline */}
        <div className="text-center mb-10">
          <h2 className="font-poppins text-4xl font-bold text-[#000000] mb-2">
            Some of our best works.
          </h2>
          <svg 
            width="200" 
            height="10" 
            viewBox="0 0 200 10" 
            className="mx-auto"
          >
            <path
              d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
              stroke="#919191"
              strokeWidth="2"
              fill="none"
              className="animate-[wave_2s_ease-in-out_infinite]"
            />
          </svg>
        </div>

        {/* Main two images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[10px] mb-12">
          {mainWorks.map((work) => (
            <div key={work.id} className="flex flex-col items-center">
              <div className="relative group">
                <img
                  src={work.image}
                  alt={work.caption}
                  className="w-[357px] h-[268px] object-cover rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                />
                <ArrowUpRight 
                  className="absolute top-4 right-4 w-6 h-6 text-white stroke-[2px] transition-transform duration-300 group-hover:rotate-[42deg]"
                  style={{ transform: 'rotate(36deg)' }}
                />
              </div>
              <p className="font-poppins text-xl font-medium text-[#1E1E1E] mt-[10px]">
                {work.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative mb-12">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div 
              className="flex gap-[10px]"
              style={{
                transform: `translateX(-${scrollX}px)`,
                transition: 'none'
              }}
            >
              {carouselItems.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Portfolio item ${index + 1}`}
                    className="w-[142px] h-[106px] object-cover rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Mobile: side character below content */}
      <div className="lg:hidden flex justify-center mt-12">
        <img
          src={sideCharacter}
          alt="Decorative character"
          className="w-32 h-auto"
        />
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { d: path("M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"); }
          50% { d: path("M0,5 Q10,10 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioWorksSection;
