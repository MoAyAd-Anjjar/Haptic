
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";

interface TestimonialProps {
  videoThumbnail: string;
  videoSrc: string;
  name: string;
  role: string;
  company: string;
}

const testimonials = [
  {
    videoThumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Danny Quick",
    role: "Founder",
    company: "Powerups"
  },
  {
    videoThumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Adam McIntee",
    role: "Co-Founder",
    company: "Apollo"
  }
];

const TestimonialCard = ({ videoThumbnail, videoSrc, name, role, company }: TestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  
  return (
    <div className="px-1">
      <div className="relative mb-4">
        <AspectRatio ratio={16/9} className="overflow-hidden  bg-black">
          {isPlaying ? (
            <video 
              src={videoSrc} 
              controls 
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <img 
                src={videoThumbnail} 
                alt={name} 
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
              >
                <div className="bg-white rounded-full p-3 flex items-center justify-center">
                  <Play className="h-6 w-6 text-black" />
                </div>
              </button>
            </>
          )}
        </AspectRatio>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-xs">⚡</span>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const NewsTickerBar = () => {
  const clients = [
    "Reddit", "Kolo", "XSpark", "Icons8", "Apollo", 
    "Figma", "Slack", "Discord", "Notion", "Dropbox"
  ];
  
  // Duplicate the array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];
  
  return (
    <div className="w-full overflow-hidden bg-black py-4 mt-8">
      <div className="ticker-wrap">
        <div className="ticker-move">
          {duplicatedClients.map((client, index) => (
            <div key={index} className="ticker-item text-white text-lg font-medium mx-10">
              {client}
            </div>
          ))}
        </div>
      </div>
      <style >{`
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
        }
        .ticker-move {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }
        .ticker-item {
          display: inline-block;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16  md:py-24  bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              
              key={index}
              videoThumbnail={testimonial.videoThumbnail}
              videoSrc={testimonial.videoSrc}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
        
        {/* Replace the client logos with the news ticker */}
      </div>
        <NewsTickerBar />
    </section>
  );
};

export default TestimonialsSection;
