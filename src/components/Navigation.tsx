import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ContactModal from './ContactModal';

const Navigation = () => {
  const location = useLocation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const navItems = [
    { title: 'home', path: '/' },
    { title: 'about', path: '/about' },
    { title: 'portfolio', path: '/portfolio' },
    { title: 'contact us', path: '#contact', onClick: () => setIsContactModalOpen(true) },
  ];

  return (
    <>
      <nav 
        className="fixed left-6 md:left-[70px] top-[50px] z-50"
        aria-label="Main navigation"
      >
        <ul className="flex flex-col gap-0">
          {navItems.map((item) => (
            <li key={item.title}>
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className={`font-inter text-[24px] leading-tight transition-opacity duration-[180ms] hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm text-left ${
                    location.pathname === item.path ? 'font-bold' : 'font-normal'
                  }`}
                  style={{ color: '#000000' }}
                >
                  {item.title}
                </button>
              ) : (
                <a
                  href={item.path}
                  className={`font-inter text-[24px] leading-tight transition-opacity duration-[180ms] hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm ${
                    location.pathname === item.path ? 'font-bold' : 'font-normal'
                  }`}
                  style={{ color: '#000000' }}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </>
  );
};

export default Navigation;
