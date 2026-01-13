import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: "Hackathon Registration Form",
    desc: "sample hackathon registration site",
    tech: ["HTML","CSS"],
    liveLink: "https://mhd-raneesh123.github.io/hackathon-registration-form/",
    githubLink: "https://github.com/mhd-raneesh123/hackathon-registration-form"
  },
  {
    title: "Hospital Management System",
    desc: "A full-scale database project focused on normalization (3NF/BCNF) and secure data triggers.",
    tech: ["SQL", "Python", "Database Design"],
    liveLink: "https://github.com/mhd-raneesh123/hospital-management-system",
    githubLink: "https://github.com/mhd-raneesh123/hospital-management-system"
  },
  {
    title: "Metamorphosis Agent",
    desc: "Advanced logic-based project focusing on adaptive algorithms and system architecture.",
    tech: ["Python", "Algorithms", "Logic"],
    liveLink: "https://metamorphosisagent-c9xj5dnazz3zedqydbvk7e.streamlit.app/",
    githubLink: "https://github.com/mhd-raneesh123/Metamorphosis_Agent"
  },
];

  return (
    <section id="projects" className="py-20 bg-f1-carbon relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black italic uppercase mb-16 text-center">
          <span className="text-f1-red">RECENT </span> WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-f1-dark border-2 border-gray-800 hover:border-f1-red transition-all duration-300 p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-f1-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-f1-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-bold uppercase bg-f1-carbon px-3 py-1 border border-gray-700 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                      <div className="flex space-x-4">
                  <a href={project.githubLink} target="_blank" className="flex items-center font-bold text-sm uppercase tracking-wider hover:text-f1-red transition">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" className="flex items-center font-bold text-sm uppercase tracking-wider text-f1-red hover:text-white transition">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;