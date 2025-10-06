import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ChevronDown, ExternalLink } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
  { id: 2, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
  { id: 3, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
  { id: 4, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
  { id: 5, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
  { id: 6, title: 'logistic webs', subtitle: 'logistic website.', link: '#' },
];

const categories = ['restaurant', 'tech', 'education', 'creative', 'agency'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('restaurant');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="relative mb-20">
            <div className="text-center">
              <h1 className="font-poppins text-[36px] font-medium text-black mb-2 inline-block relative">
                yeah this is our whole portfolio.
                {/* Wiggly underline */}
                <svg 
                  className="absolute left-0 w-full" 
                  style={{ top: 'calc(100% + 3.4px)' }}
                  height="8" 
                  viewBox="0 0 600 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q15,2 30,4 T60,4 T90,4 T120,4 T150,4 T180,4 T210,4 T240,4 T270,4 T300,4 T330,4 T360,4 T390,4 T420,4 T450,4 T480,4 T510,4 T540,4 T570,4 T600,4"
                    stroke="#919191"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.15"
                  />
                </svg>
              </h1>
            </div>

            {/* Dropdown Filter Button */}
            <div className="absolute right-0 top-0" style={{ transform: 'translateY(-8px)' }}>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center gap-2 w-[136px] h-[48px] rounded-[20px] bg-[hsl(var(--green-cta))] text-white font-poppins font-medium text-[16px] transition-all hover:opacity-90"
                >
                  {selectedCategory}
                  <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-[136px] bg-white rounded-[20px] shadow-lg overflow-hidden z-50 border border-gray-200">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left font-poppins text-[14px] transition-colors ${
                          selectedCategory === category
                            ? 'bg-[hsl(var(--green-cta))] text-white font-medium'
                            : 'text-black hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-[1100px] mx-auto">
            {portfolioItems.map((item) => (
              <div key={item.id} className="flex flex-col items-start">
                {/* Image Card */}
                <a 
                  href={item.link}
                  className="relative block mb-4 group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div 
                    className="w-[280px] h-[233px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-[30px] relative overflow-hidden"
                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                  >
                    {/* Placeholder background */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-poppins text-sm">
                      Portfolio Image
                    </div>

                    {/* Arrow Icon - Top Right */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <ExternalLink size={14} className="text-white" />
                    </div>

                    {/* Hover "check out." Button */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        hoveredItem === item.id
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-50 pointer-events-none'
                      }`}
                    >
                      <div className="w-[100px] h-[100px] rounded-full bg-[hsl(var(--green-cta))] flex items-center justify-center">
                        <span className="font-poppins text-white text-[14px] font-medium text-center leading-tight">
                          check<br />out.
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Text Content */}
                <div className="pl-2">
                  <h3 className="font-poppins text-[20px] font-medium text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-[15px] font-normal text-[#919191]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
