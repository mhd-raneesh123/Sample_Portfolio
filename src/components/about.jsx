import { Cpu, Code, Database, Globe, Layout, Terminal, PenTool, Share2, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Cpu className="text-f1-red" />,
      items: ["Networking (TCP/UDP)", "Socket Programming", "8086/8051 Assembly", "Algorithms"]
    },
    {
      title: "Data & Systems",
      icon: <Database className="text-f1-red" />,
      items: ["SQL (MySQL/Oracle)", "Database Normalization", "Triggers & Views", "System Architecture"]
    },
    {
      title: "Development",
      icon: <Code className="text-f1-red" />,
      items: ["React JS", "Python", "C Programming", "Tailwind CSS"]
    },
    {
      title: "Design & Tools",
      icon: <PenTool className="text-f1-red" />,
      items: ["Graphic Design", "PlantUML", "Cisco Packet Tracer", "Vite / Git"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-f1-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-black italic uppercase mb-16 text-center">
                  TOOLS
          <span className="text-f1-red">&</span>SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-f1-carbon p-6 border-b-4 border-gray-800 hover:border-f1-red transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-f1-dark rounded-sm group-hover:bg-f1-red/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="ml-4 font-black uppercase italic text-sm tracking-wider">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-sm font-semibold group-hover:text-f1-light transition-colors">
                    <span className="w-1.5 h-1.5 bg-f1-red mr-3 rounded-full opacity-50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;