import { ArrowRightCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden">
      {/* Background Elements creating a speed effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-f1-red transform -skew-x-12 translate-x-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left">
          <h1 className="text-5xl md:text-8xl font-black italic mb-6 leading-tight uppercase">
            N K MOHAMMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-light to-f1-carbon">RANEESH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl font-semibold">
            I'm a Computer Science undergraduate passionate about software engineering, AI, UI/UX design and crafting user-friendly digital solutions.
          </p>
          
          <a href="#projects" className="group inline-flex items-center bg-f1-red text-white px-8 py-4 font-black italic uppercase tracking-wider skew-x-[-10deg] hover:bg-red-700 transition-all duration-300 border-b-4 border-red-900 hover:border-red-950 transform active:translate-y-[2px]">
            <span className="skew-x-[10deg]">View More</span>
            <ArrowRightCircle className="ml-3 w-6 h-6 skew-x-[10deg] group-hover:translate-x-2 transition-transform" />
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;