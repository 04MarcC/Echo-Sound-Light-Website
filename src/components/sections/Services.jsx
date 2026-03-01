import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {
    return (<section id="services" className="min-h-screen flex items-center justify-center relative">

        <div style={{backgroundImage: 'url(lightshowpicturebg1.png)'}} className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0 py-4"></div>

    <RevealOnScroll>
    <div className="text-center z-10 px-4">   
        <h1 className="text-6xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Echo Sound & Light's Services
        </h1>

        <p className="text-lg mb-3 max-w-lg mx-auto font-bold">
            Echo Sound And Light offers a range of services including:
        </p>
        
        
      <ul className="list-disc pl-2 text-left max-w-md mx-50">
  <li>Sound System Installation</li>
  <li>Lighting Installation</li>
  <li>Sound Equipment Hire</li>
  <li>Sound Equipment Repair</li>
  <li>Lighting Equipment Hire</li>
  <li>Lighting Equipment Repair</li>
  <li>Event Equipment Setup</li>
  <li>Foam Cannon Hire</li>
</ul>
        

        
        
    </div>
    </RevealOnScroll>
    </section>
    );
};