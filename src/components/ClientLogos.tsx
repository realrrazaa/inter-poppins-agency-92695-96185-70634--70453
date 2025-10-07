import { useEffect, useState } from 'react';

const ClientLogos = () => {
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Mock client logos (you can replace these with actual logo images)
  const logos = [
    { id: 1, color: '#93BD60' }, // Green
    { id: 2, color: '#E74C3C' }, // Red
    { id: 3, color: '#4285F4' }, // Blue
    { id: 4, color: '#000000' }, // Black
    { id: 5, color: '#3498DB' }, // Light blue
  ];

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + 0.5) % 360);
    };

    const intervalId = setInterval(animate, 20);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find all ContentSections
      const contentSections = document.querySelectorAll('[data-section="content"]');
      const lastContentSection = contentSections[contentSections.length - 1];
      
      if (lastContentSection) {
        const lastSectionRect = lastContentSection.getBoundingClientRect();
        const lastSectionBottom = scrollY + lastSectionRect.bottom;
        
        // Show after scrolling 50px but hide after scrolling past the last ContentSection
        setIsVisible(scrollY >= 50 && scrollY < lastSectionBottom - windowHeight * 0.5);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 80;
  const centerX = 120;
  const centerY = 120;

  return (
    <div className={`fixed right-8 bottom-8 z-40 transition-opacity duration-500 ease-in-out hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative" style={{ width: '240px', height: '240px' }}>
        {/* Centered "previous clients" text */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
        >
          <p className="font-inter text-[14px] font-normal leading-tight" style={{ color: '#000000' }}>
            previous<br />clients.
          </p>
        </div>
        
        {/* Rotating logos */}
        {logos.map((logo, index) => {
          const angle = (rotation + (index * 360 / logos.length)) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          
          return (
            <div
              key={logo.id}
              className="absolute transition-all duration-75 ease-linear"
              style={{
                width: '58px',
                height: '58px',
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: logo.color,
                borderRadius: '4px',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientLogos;
