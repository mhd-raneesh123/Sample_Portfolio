import { Mail, Linkedin, Github, Flag } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-f1-dark border-t-4 border-f1-red">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black italic uppercase mb-8">
          <span className="text-f1-red">CONTACT </span>ME
        </h2>
        <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
          Ready to accelerate your next project? Send me transmission and let's discuss strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
           {/* Contact Links styled as technical buttons */}
          <a href="mailto:mhdraneeshpop123@gmail.com" className="flex flex-col items-center p-6 bg-f1-carbon border-2 border-gray-800 hover:border-f1-red hover:bg-f1-red/10 transition group skew-x-[-5deg]">
            <Mail className="w-10 h-10 text-f1-red mb-4 group-hover:scale-110 transition-transform skew-x-[5deg]" />
            <span className="font-bold uppercase tracking-wider skew-x-[5deg]">Send Email</span>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-raneesh-426273316/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-f1-carbon border-2 border-gray-800 hover:border-f1-red hover:bg-f1-red/10 transition group skew-x-[-5deg]">
             <Linkedin className="w-10 h-10 text-f1-red mb-4 group-hover:scale-110 transition-transform skew-x-[5deg]" />
             <span className="font-bold uppercase tracking-wider skew-x-[5deg]">LinkedIn</span>
          </a>
          <a href="https://github.com/mhd-raneesh123" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-f1-carbon border-2 border-gray-800 hover:border-f1-red hover:bg-f1-red/10 transition group skew-x-[-5deg]">
             <Github className="w-10 h-10 text-f1-red mb-4 group-hover:scale-110 transition-transform skew-x-[5deg]" />
             <span className="font-bold uppercase tracking-wider skew-x-[5deg]">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;