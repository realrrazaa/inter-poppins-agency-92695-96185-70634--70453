import { useEffect, useState } from 'react';

const ReviewsSection = () => {
  const [scrollX, setScrollX] = useState(0);

  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "linkedIn ceo.",
      icon: "/placeholder.svg"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "Google mustard.",
      icon: "/placeholder.svg"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "Facebook meta.",
      icon: "/placeholder.svg"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "linkedIn ceo.",
      icon: "/placeholder.svg"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "Google mustard.",
      icon: "/placeholder.svg"
    },
  ];

  const featureWords = [
    { text: "completing your goals", color: "#000000", rotation: 2.12, x: "15%", y: "0%" },
    { text: "extra benefits", color: "#919191", rotation: 0, x: "40%", y: "5%" },
    { text: "Originality", color: "#000000", rotation: -1.5, x: "65%", y: "2%" },
    { text: "experience", color: "#919191", rotation: 1, x: "85%", y: "0%" },
    { text: "design that sells", color: "#000000", rotation: -2, x: "20%", y: "40%" },
    { text: "trust", color: "#000000", rotation: 0, x: "45%", y: "38%" },
    { text: "Cost-effective", color: "#000000", rotation: 1.5, x: "68%", y: "42%" },
    { text: "quickest", color: "#000000", rotation: -1, x: "88%", y: "35%" },
    { text: "impact", color: "#919191", rotation: 2, x: "18%", y: "75%" },
    { text: "quickest", color: "#000000", rotation: 0, x: "42%", y: "80%" },
    { text: "delivery", color: "#919191", rotation: -1.8, x: "65%", y: "78%" },
    { text: "strategy", color: "#000000", rotation: 1.2, x: "85%", y: "72%" },
  ];

  // Auto-scroll animation
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.3;
    const reviewWidth = 600; // Approximate width of each review card
    const resetPoint = reviewWidth * 2; // Reset after 2 reviews

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
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top illustration */}
        <div className="flex justify-center -mt-4 mb-8">
          <img
            src="/placeholder.svg"
            alt="Illustration"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Heading with wavy underline */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-medium text-[#000000] mb-2">
            The reviews say
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

        {/* Reviews Carousel */}
        <div className="relative mb-20">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div 
              className="flex items-center"
              style={{
                transform: `translateX(-${scrollX}px)`,
                transition: 'none'
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div className="w-[600px] px-8">
                    <p className="font-poppins text-xl font-medium text-[#000000] mb-4 text-center">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-poppins text-2xl font-medium text-[#919191]">
                        {review.reviewer}
                      </span>
                      <img 
                        src={review.icon} 
                        alt="Company icon" 
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  
                  {/* Dashed separator */}
                  {index < reviews.length - 1 && (
                    <div className="h-32 border-r border-dashed border-[#000000] opacity-30" 
                         style={{ borderWidth: '0.3px' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="relative mb-16">
          {/* Left logos */}
          <div className="absolute left-0 flex flex-col gap-8">
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
          </div>

          {/* Right logos */}
          <div className="absolute right-0 flex flex-col gap-8">
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
            <img src="/placeholder.svg" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform" />
          </div>
        </div>

        {/* Feature Words Area */}
        <div className="relative h-64 mt-32">
          {featureWords.map((word, index) => (
            <div
              key={index}
              className="absolute font-poppins text-2xl font-semibold animate-fade-in"
              style={{
                color: word.color,
                transform: `rotate(${word.rotation}deg)`,
                left: word.x,
                top: word.y,
              }}
            >
              {word.text}
            </div>
          ))}
        </div>
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

export default ReviewsSection;
