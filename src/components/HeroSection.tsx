import { ArrowRight } from 'lucide-react';
import agencyLogo from '@/assets/omai-logo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-xl text-left">
        <h1 className="font-poppins text-5xl md:text-[64px] font-normal text-foreground mb-3 leading-tight flex items-center gap-2">
          omai
          <img 
            src={agencyLogo}
            alt="Omai agency mascot"
            className="w-12 h-12 md:w-16 md:h-16 object-contain inline-block"
          />
        </h1>
        
        <p className="font-poppins text-[15px] font-normal text-muted-foreground tracking-wide leading-relaxed mb-4 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
        </p>
        
        <a
          href="#contact"
          className="inline-flex items-center gap-3 font-poppins text-xl font-semibold text-foreground transition-all duration-[180ms] hover:gap-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm group relative"
          aria-label="Contact us"
        >
          <span className="relative">
            contact us
            <svg 
              className="absolute -bottom-1 left-0 w-full" 
              height="4" 
              viewBox="0 0 100 4" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          </span>
          <ArrowRight 
            className="w-5 h-5 transition-transform duration-[180ms] group-hover:translate-x-1" 
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
