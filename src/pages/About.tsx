import Navigation from '@/components/Navigation';
import aboutBears from '@/assets/about-bears.png';

const AboutSection = ({ title }: { title: string }) => {
  return (
    <section className="mb-32 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading with underline */}
        <div className="mb-12">
          <h2 className="font-poppins text-[36px] font-medium text-black mb-2">
            {title}
          </h2>
          <div className="w-[80%] h-[2px] bg-[#919191]" />
        </div>

        {/* Three Column Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
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
        <div className="flex justify-center py-12">
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
      
      <main className="pt-32 pb-16">
        <AboutSection title="our story." />
        <AboutSection title="why bear and the name omai." />
        <AboutSection title="why us." />
      </main>
    </div>
  );
};

export default About;
