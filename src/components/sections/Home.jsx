import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (<section id="home" className="relative min-h-screen flex items-center justify-center relative">

        <div style={{backgroundImage: 'url(lightceiling.png)'}} className="  absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0 py-4"></div>
    <RevealOnScroll>
    <div className="text-center z-10 px-4">   
        <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Welcome to Echo Sound & Light
        </h1>

        <p className="text-lg mb-4 max-w-lg mx-auto">
            Your premier destination for the best audio and sound equipment in the Midlands. Whether you're planning an event, need equipment installed or need professional sound and lighting services, we've got you covered.
        </p>
        
        <div className="flex justify-center space-x-4">
            <a href="#contact" className="border border-blue-500/50 text-blue-500 text-1xl py-3 px-6 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.3 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-600">Contact Us</a>
        </div>
    </div>
    </RevealOnScroll>
    </section>
    );
};