import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (<section id="about" className="relative min-h-screen flex items-center justify-center py-20">
        
        <div style={{backgroundImage: 'url(lightceiling.png)'}} className="  absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0 py-4"></div>
    
        

    <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center leading-tight">About Echo Sound & Light</h2>

    <div className="glass rounded-xl p-8 border-white/50 border hover:-translate-y-0 transition-all text-center">
    <p className="text-gray-300 mb-6">
        We at Echo Sound & Light are specialists in a wide range of audio-visual services, including sound system installation, lighting design, and event production. With decades of experience, we pride ourselves on delivering high-quality solutions tailored to meet the unique needs of each client. We are dedicated to ensuring that everything we do is executed with precision and creativity, making us a trusted partner for both residential and commercial clients. Whether you're looking to install a sound system or need sound and light equipment for an event.Echo Sound & Light has the expertise and passion to bring your vision to life.
    </p>
     
     


    


    </div>
    <h3 className="text-5xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center py-7">Previous Projects</h3>
    
    <img src="964506109-1751444582_original.jpeg" alt="Previous Project" className="h-auto max-w-full rounded-lg border-1" />
    <p>Eddie Valentines - Longford Town</p>
    <img src="PVS-Longford-00001-1.jpg" alt="Previous Project1" className="h-auto max-w-full rounded-lg border" />
    <p>PV's - Longford Town</p>
    <img src="bar-rua.jpg" alt="Previous Project2" className="h-auto max-w-full rounded-lg border-1 " />
    <p>Bar Rua - Dublin City Centre </p>
    <img src="visitor-moonriver-01.jpg" alt="Previous Project3" className="h-auto max-w-full rounded-lg border-1" />
    <p>Moon River - Carrick On Shannon</p>
    

    </div> 
    </RevealOnScroll>
    </section>
    )
}
