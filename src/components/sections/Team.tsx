
import { Github, Linkedin } from "lucide-react";
import GradientText from "../ui/GradientText";
import AnimatedCard from "../ui/AnimatedCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Aarjika Lahiri",
      role: "President",
      image: "https://placehold.co/400x400?text=AJ",
      linkedin: "https://www.linkedin.com/in/aarjika-lahiri-471129281/",
      github: "https://github.com",
      delay: 100
    },
    {
      name: "Ayush Sikriwal",
      role: "Vice President",
      image: "https://placehold.co/400x400?text=SL",
      linkedin: "https://www.linkedin.com/in/ayush-sikriwal-88b93a203",
      github: "https://github.com",
      delay: 200
    },
    {
      name: "Himanshu Agarwal",
      role: "General Secretary",
      image: "https://placehold.co/400x400?text=RS",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      delay: 300
    },
    {
      name: "Mridul Tiwari",
      role: "Tech Head",
      image: "https://placehold.co/400x400?text=PP",
      linkedin: "https://www.linkedin.com/in/mridul-tiwari-502825291/",
      github: "https://github.com/mridulchills",
      delay: 400
    },
    {
      name: "Aditya Singh",
      role: "Design Head",
      image: "https://placehold.co/400x400?text=MC",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      delay: 500
    },
    {
      name: "Harshit Ashok Hanabar",
      role: "Social Media Head",
      image: "https://placehold.co/400x400?text=SW",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      delay: 600
    },
    {
      name: "Prem Piyush",
      role: "Documentation Head",
      image: "https://placehold.co/400x400?text=SW",
      linkedin: "https://www.linkedin.com/in/prem-piyush-2185292ab/",
      github: "https://github.com",
      delay: 600
    },
    {
      name: "Bhargavi Saraswat",
      role: "Marketing Head",
      image: "https://placehold.co/400x400?text=SW",
      linkedin: "https://www.linkedin.com/in/bhargavi-saraswat-441b31274/",
      github: "https://github.com",
      delay: 600
    },
    {
      name: "Parvathy S",
      role: "Public Relations Head",
      image: "https://placehold.co/400x400?text=SW",
      linkedin: "https://www.linkedin.com/in/parvathy-s-a14438281/",
      github: "https://github.com",
      delay: 600
    }
  ];
  
  const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
    return (
      <AnimatedCard 
        className="p-6 flex flex-col items-center text-center group"
        animationDelay={member.delay}
      >
        <div className="relative mb-6 overflow-hidden rounded-full w-32 h-32 border-2 border-white/10 group-hover:border-codewars-blue/50 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-codewars-blue/20 to-codewars-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-codewars-blue mb-4">{member.role}</p>
        
        <div className="flex space-x-3">
          <a 
            href={member.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-2 rounded-full text-white/70 hover:text-codewars-blue transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={member.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-2 rounded-full text-white/70 hover:text-codewars-blue transition-colors"
            aria-label={`${member.name}'s GitHub`}
          >
            <Github size={16} />
          </a>
        </div>
      </AnimatedCard>
    );
  };
  
  return (
    <section id="team" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block mb-3 bg-codewars-blue/10 text-codewars-blue px-3 py-1 rounded-full text-sm font-medium">
          Meet the Team
        </span>
        <h2 className="section-title">
          <GradientText>Core Team</GradientText>
        </h2>
        <p className="text-lg text-white/80 mt-6">
          The talented individuals working behind the scenes to make CodeWars 3.0 a success
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
