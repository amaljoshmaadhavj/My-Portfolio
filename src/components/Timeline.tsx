import { SectionTransition } from './SectionTransition';

interface TimelineItemProps {
  year: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem = ({ year, type, title, subtitle, description, isLeft }: TimelineItemProps) => {
  return (
    <div className={`flex flex-col md:flex-row w-full mb-16 md:mb-24 items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className="w-full md:w-[45%]">
        <SectionTransition delay={0.1} className={`flex flex-col md:items-start md:text-left`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-primary font-display font-bold uppercase text-xs tracking-widest opacity-80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              {type}
            </span>
            <span className="md:hidden text-lg font-bold text-foreground/40">{year}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-foreground tracking-tight">
            {title}
          </h3>
          <h4 className="text-base md:text-lg font-medium text-primary/60 mb-4">
            {subtitle}
          </h4>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-md">
            {description}
          </p>
        </SectionTransition>
      </div>

      {/* Center Line Dot */}
      <div className="hidden md:flex w-[10%] justify-center relative">
        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center z-10 shadow-sm group-hover:border-primary/50 transition-colors duration-500">
           <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
        </div>
      </div>

      {/* Year Side */}
      <div className="hidden md:flex md:w-[45%]">
        <SectionTransition delay={0.2} className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
          <span className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold text-[#0F172A]/[0.12] tracking-normal hover:text-primary/20 transition-all duration-700 select-none">
            {year}
          </span>
        </SectionTransition>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const journeys = [
    {
      year: "2023",
      type: "Education",
      title: "Saveetha Engineering College",
      subtitle: "Bachelor of Technology in Artificial Intelligence and Data Science (2023 – 2027)",
      description: "Building strong foundations in Artificial Intelligence, Machine Learning, Data Science, and intelligent system development while actively participating in technical projects and innovation programs."
    },
    {
      year: "2024",
      type: "Implant Training",
      title: "Artificial Intelligence Training — KaviTamil Solutions",
      subtitle: "Implant Training",
      description: "Completed implant training focused on Artificial Intelligence concepts, practical machine learning workflows, and real-world AI applications with hands-on exposure to industry practices."
    },
    {
      year: "2024",
      type: "Achievement",
      title: "Flipkart GRID 6.0 Robotics Challenge — Semi Finalist",
      subtitle: "National Level Competition",
      description: "Designed and prototyped an autonomous robot for warehouse automation during this prestigious national-level innovation challenge, focusing on intelligent navigation and automation systems."
    },
    {
      year: "2025",
      type: "Internship",
      title: "Machine Learning Intern — CodSoft (Online)",
      subtitle: "Professional Internship",
      description: "Worked on machine learning projects involving data preprocessing, predictive modeling, and algorithm implementation while gaining practical experience in AI development workflows."
    },
    {
      year: "2025",
      type: "Achievement",
      title: "NASSCOM Automation Using Agentic AI — Finalist",
      subtitle: "National Automation Challenge",
      description: "Developed intelligent AI agents for process automation and advanced workflow optimization, reaching the finals of this industry-recognized national automation challenge."
    },
    {
      year: "2025",
      type: "Hackathon",
      title: "Smart India Hackathon — Participant",
      subtitle: "National Hackathon",
      description: "Developed a Federated AI Framework for Intelligent Recruitment and Document Authentication, focusing on secure AI-driven hiring workflows and verification systems."
    },
    {
      year: "2025",
      type: "Achievement",
      title: "VIT Hackathrone — Finalist",
      subtitle: "Hackathon Finalist",
      description: "Built an enhanced Federated AI Framework for Intelligent Recruitment and Document Authentication with advanced intelligent features, scalability improvements, and optimized automation capabilities."
    }
  ];

  return (
    <div className="relative py-12">
      {/* Vertical Line */}
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-border hidden md:block"></div>
      
      <div className="flex flex-col items-center">
        {journeys.map((item, index) => (
          <TimelineItem 
            key={index}
            {...item}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
