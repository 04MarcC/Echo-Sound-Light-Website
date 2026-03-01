import {useState} from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent!");
        }).catch(() => alert("Oops ! Something went wrong. Please try again later."));
    }

    return <section id="contact" className="relative min-h-screen flex items-center justify-center pyt-20">

    <div style={{backgroundImage: 'url(lightceiling.png)'}} className="  absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0 py-4"></div>
    
    <RevealOnScroll>
        <div classname="px-4 w-150">
            <h2 className="text-6xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"> Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
                <input type="name" id="name" name="name" required value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>

               
            
                <div className="relative">
                <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>

                <div className="relative">
                <textarea id="message" name="message" required rows={5} value={formData.message} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Message" onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                </div>

                <button type="submit" className="w-full bg-blue-500 hover:-translate-y-0.3 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300">Send Message</button>

                
                

                

            

            </form>
        </div>
    </RevealOnScroll>
    </section>
}