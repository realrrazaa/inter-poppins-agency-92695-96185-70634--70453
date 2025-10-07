import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import aboutBears from '@/assets/about-bears.png';

const AboutSection = ({ title }: { title: string }) => {
  return (
    <section className="mb-32 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading with wiggly underline */}
        <div className="mb-12">
          <h2 className="font-poppins text-[36px] font-medium text-black mb-2 inline-block relative">
            {title}
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
          </h2>
        </div>

        {/* Three Column Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6">
          <p className="font-poppins text-[15px] font-semibold text-black leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien <span className="font-bold">vitae</span> pellentesque sem placerat. In id cursus mi pretium tellus duis <span className="font-bold">convallis</span>.
          </p>
          <p className="font-poppins text-[15px] font-semibold text-black leading-[1.6]">
            Lorem ipsum dolor sit amet <span className="font-bold">consectetur</span> adipiscing elit. Quisque faucibus ex sapien vitae pellentesque <span className="font-bold">sem</span> placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <p className="font-poppins text-[15px] font-semibold text-black leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque <span className="font-bold">faucibus</span> ex sapien vitae <span className="font-bold">pellentesque</span> sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
        </div>

        {/* Illustration Image */}
        <div className="flex justify-center py-4">
          <img 
            src={aboutBears} 
            alt={`Illustration for ${title}`}
            className="w-full max-w-[1000px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-40 pb-16">
        <AboutSection title="our story." />
        <AboutSection title="why bear and the name omai." />
        <AboutSection title="why us." />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
