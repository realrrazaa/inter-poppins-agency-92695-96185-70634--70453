import footerCharacter from '@/assets/footer-character.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_auto] gap-8 md:gap-12 items-center min-h-[200px]">
          {/* Left: Character Illustration */}
          <div className="flex items-end justify-center md:justify-start">
            <img 
              src={footerCharacter} 
              alt="Agency character illustration" 
              className="w-48 h-auto"
            />
          </div>

          {/* Center: Four Columns */}
          <div className="flex gap-8 md:gap-12 justify-center md:justify-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-[-3px]">
              <span className="font-inter text-[15px] font-normal leading-tight">gmail.</span>
              <span className="font-inter text-[15px] font-normal leading-tight">whatsapp.</span>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[-3px]">
              <span className="font-inter text-[15px] font-normal leading-tight">home</span>
              <span className="font-inter text-[15px] font-normal leading-tight">about</span>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[-3px]">
              <span className="font-inter text-[15px] font-normal leading-tight">portfolio</span>
              <span className="font-inter text-[15px] font-normal leading-tight">contact us</span>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[-3px]">
              <span className="font-inter text-[15px] font-normal leading-tight">youtube.</span>
              <span className="font-inter text-[15px] font-normal leading-tight">instagram.</span>
              <span className="font-inter text-[15px] font-normal leading-tight">twitter.</span>
            </div>
          </div>

          {/* Right: Lorem Ipsum Text */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="font-poppins text-[15px] font-normal text-white text-center md:text-right max-w-[300px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
            </p>
          </div>
        </div>

        {/* Bottom Legal Text */}
        <div className="flex gap-8 justify-end items-center mt-6 pr-0">
          <span className="font-inter text-[15px] font-normal">terms and conditions</span>
          <span className="font-inter text-[15px] font-normal">privacy policy</span>
          <span className="font-inter text-[15px] font-normal">2025 omai website agency.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
