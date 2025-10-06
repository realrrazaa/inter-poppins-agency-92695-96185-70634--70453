import { X, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent 
        className="w-[710px] h-[605px] bg-black border-none rounded-[20px] p-12 flex flex-col items-center justify-start gap-8 [&>button]:hidden"
      >
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Heading with Wiggly Underline */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <h2 className="font-poppins text-[24px] font-medium text-white text-center">
            say it simply, we'll get it.
          </h2>
          <svg width="320" height="8" viewBox="0 0 320 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M2 4C20 2 40 6 60 4C80 2 100 6 120 4C140 2 160 6 180 4C200 2 220 6 240 4C260 2 280 6 300 4C310 3 315 4 318 4" 
              stroke="#CEE8AE" 
              strokeWidth="2" 
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Subtext */}
        <p className="font-poppins text-[13px] font-normal text-white text-center max-w-md">
          We'd love to hear from you. Drop a quick message.
        </p>

        {/* Form */}
        <form className="w-full flex flex-col gap-8 mt-2">
          {/* Name and Email Row */}
          <div className="grid grid-cols-2 gap-8">
            {/* Your Name */}
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-[16px] font-medium text-white">
                your name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-none outline-none text-white font-poppins text-[16px] placeholder:text-white/70"
              />
              <svg width="100%" height="6" viewBox="0 0 250 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2 3C20 1 40 5 60 3C80 1 100 5 120 3C140 1 160 5 180 3C200 1 220 5 240 3C245 2.5 248 3 248 3" stroke="#D7FAAD" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Your Email */}
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-[16px] font-medium text-white">
                your email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border-none outline-none text-white font-poppins text-[16px] placeholder:text-white/70"
              />
              <svg width="100%" height="6" viewBox="0 0 250 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2 3C20 1 40 5 60 3C80 1 100 5 120 3C140 1 160 5 180 3C200 1 220 5 240 3C245 2.5 248 3 248 3" stroke="#D7FAAD" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Your Message */}
          <div className="flex flex-col gap-2">
            <label className="font-poppins text-[16px] font-medium text-white">
              your message
            </label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-transparent border-none outline-none text-white font-poppins text-[16px] placeholder:text-white/70 resize-none"
            />
            <div className="relative">
              <svg width="100%" height="6" viewBox="0 0 580 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2 3C50 1 100 5 150 3C200 1 250 5 300 3C350 1 400 5 450 3C500 1 530 4 560 3C570 2.5 575 3 578 3" stroke="#D7FAAD" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {/* Decorative circle with line */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-center mt-4 flex flex-row justify-center items-center px-6 py-3 gap-2 w-[154px] h-[40px] bg-[#394B22] rounded-lg font-poppins font-medium text-white hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(57, 75, 34, 0.4))'
            }}
          >
            let's begin
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
