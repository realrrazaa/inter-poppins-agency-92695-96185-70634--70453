import { useState } from 'react';
import heroIllustration from '@/assets/hero-illustration.png';
import ConnectorIllustration from './ConnectorIllustration';

interface Tag {
  label: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

interface ContentSectionProps {
  connectorVariant: 'circle-line' | 'line-circle' | 'line-only';
  showClientLogos?: boolean;
}

const ContentSection = ({ connectorVariant, showClientLogos = false }: ContentSectionProps) => {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const tags: Tag[] = [
    { label: 'automation', position: { top: '25%', left: '15%' } },
    { label: 'javascript', position: { top: '45%', left: '10%' } },
    { label: 'css', position: { bottom: '30%', left: '12%' } },
    { label: 'ai implementation', position: { top: '20%', right: '18%' } },
    { label: 'html', position: { top: '35%', right: '15%' } },
    { label: 'python', position: { top: '50%', right: '12%' } },
    { label: 'backend', position: { bottom: '25%', right: '15%' } },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      
      <div className="text-center mb-3 max-w-3xl">
        <h1 
          className="font-inter text-[24px] font-bold mb-2 relative inline-block"
          style={{ color: '#000000' }}
        >
          We quietly build bold websites.
          <svg 
            className="absolute -bottom-1 left-0 w-full" 
            height="6" 
            viewBox="0 0 100 6" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,3 Q2.5,1 5,3 T10,3 T15,3 T20,3 T25,3 T30,3 T35,3 T40,3 T45,3 T50,3 T55,3 T60,3 T65,3 T70,3 T75,3 T80,3 T85,3 T90,3 T95,3 T100,3" 
              stroke="#919191" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </h1>
        
        <p 
          className="font-inter text-[14px] font-normal"
          style={{ color: '#919191' }}
        >
          Web development, automation & AI implementation.
        </p>
      </div>

      <div className="relative w-full max-w-4xl flex items-center justify-center my-6">
        <img 
          src={heroIllustration} 
          alt="Team working illustration" 
          className="max-w-md w-full object-contain relative z-0"
          style={{ opacity: 0.8 }}
        />
        
        {tags.map((tag) => (
          <div
            key={tag.label}
            className="absolute z-10"
            style={tag.position}
          >
            <div className="relative">
              {/* Connecting line */}
              <svg 
                className="absolute pointer-events-none" 
                style={{
                  width: '100px',
                  height: '100px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <line 
                  x1="50" 
                  y1="50" 
                  x2="80" 
                  y2="50" 
                  stroke="#e0e0e0" 
                  strokeWidth="1"
                />
              </svg>
              
              <div
                className="px-4 py-2 rounded-lg border border-foreground cursor-pointer transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: hoveredTag === tag.label ? '#000000' : '#ffffff',
                  color: hoveredTag === tag.label ? '#ffffff' : '#000000',
                  borderRadius: '8px',
                }}
                onMouseEnter={() => setHoveredTag(tag.label)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                <span className="font-inter text-[14px] font-normal">
                  {tag.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p 
        className="text-center max-w-2xl mx-auto font-inter text-[15px] font-medium leading-relaxed"
        style={{ color: '#919191' }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien 
        vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
      </p>

      <ConnectorIllustration variant={connectorVariant} />
    </section>
  );
};

export default ContentSection;
