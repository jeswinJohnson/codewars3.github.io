
import { CalendarClock, Circle } from "lucide-react";
import GradientText from "../ui/GradientText";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "March 16, 2025",
      title: "Registration Opens",
      description: "Sign up on Unstop to secure your spot in CodeWars 3.0"
    },
    {
      date: "March 30, 2025",
      title: "Registration Closes",
      description: "Last day to register online. Walk-in registrations will also be available on the event day."
    },
    {
      date: "April 4, 2025",
      title: "Round 1: TRIVIA TRIUMPH",
      description: "Interactive quiz to be announced on-spot testing coding knowledge and logical reasoning. Duration: 1 hour."
    },
    {
      date: "April 4, 2025",
      title: "Round 2: BYTE-SIZED BATTLE",
      description: "Write the shortest possible correct solution to coding challenges. Teams compete one-on-one with winners advancing. Duration: 1.5 hours."
    },
    {
      date: "April 4, 2025",
      title: "Round 3: BUG BUSTER",
      description: "Fix buggy code quickly with a strategic sabotage element where teams can inject bugs into opponents' code. Duration: 1.5 hours."
    },
    {
      date: "April 4, 2025",
      title: "Award Ceremony",
      description: "Winners announcement and prize distribution: 1st place ₹3,500, 2nd place ₹2,500, 3rd place ₹1,000. Exclusive InterviewBuddy vouchers for all participants."
    }
  ];
  
  return (
    <section id="timeline" className="py-12">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
            Key Dates
          </span>
          <h2 className="section-title">
            <GradientText>Event Timeline</GradientText>
          </h2>
          <p className="text-lg text-white/80 mt-6">
            Mark your calendar with these important dates for CodeWars 3.0
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-codewars-blue via-codewars-cyan to-codewars-purple"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`flex items-stretch mb-16 opacity-0 animate-fade-in-up ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Content side */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div className="glass p-6 rounded-xl h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold blue-glow mb-2" style={{
                    fontSize: "clamp(1px, 3vw, 24px)",
                    overflowWrap: "break-word"
                  }}>{event.title}</h3>
                  <div className="flex items-center mb-3 justify-center sm:justify-start text-sm">
                    <CalendarClock className="h-4 w-4 text-codewars-blue mr-2" />
                    <span className="text-white/70">{event.date}</span>
                  </div>
                  <p className="text-white/80" style={{
                    fontSize: "clamp(1px, 3vw, 18px)",
                    overflowWrap: "break-word"
                  }}>{event.description}</p>
                </div>
              </div>
              
              {/* Middle node and arrow */}
              <div className="w-2/12 flex justify-center relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-codewars-blue/20 flex items-center justify-center 
                               border-2 border-codewars-blue shadow-[0_0_10px_rgba(14,165,233,0.6)]">
                    <Circle className="w-3 h-3 text-codewars-blue fill-codewars-blue" />
                  </div>
                </div>
                
                {/* Connecting line to event */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 
                               ${index % 2 === 0 ? "left-0 bg-gradient-to-l from-codewars-blue to-transparent" : "right-0 bg-gradient-to-r from-codewars-blue to-transparent"}`}>
                </div>
              </div>
              
              {/* Empty side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://unstop.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
