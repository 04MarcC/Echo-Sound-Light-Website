import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
         <nav className="fixed top-0 w-full z-40 bg-navy-800 backdrop-blur-lg border-b border-white/2 shadow-md"> 
           <div className="w-full mx-auto px-40 ">
            <div className="flex justify-between items-center h-20 ">
                
                <a href="#home" className="font-mono text-xl font-bold text-white">
                {" "}
                <img src="stroke7echosnlnobackgroundfix.png" alt="Echo Sound and Light Logo" className=" top-2 left-55 h-16 w-56 drop-shadow-2xl hover:brightness-75"  />   
                </a>


                
             
                

            <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) =>!prev)}>
            &#9776;  
                    
            </div>
            <div className="hidden md:flex items-center space-x-8 ml-auto ">
                <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
                <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
                <a href="#services" className="text-white hover:text-gray-300 transition-colors">Services</a>
                <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>

                <div className="flex items-center justify-end space-x-3 ">
                <a href="https://www.facebook.com/echosoundandlight/" target="_blank" rel="noopener noreferrer" className="flex items-center ">
                <img src="facebook-app-round-white-icon.png"  alt="facebook" className="h-3.5 w-3.5 drop-shadow-2xl hover:brightness-75"></img></a>

                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrwLMGkcSBVKtmcPdVSHJVhQfBhJPJbzKLVHHkLLkrPgxzqCVfFWqNvLbvGtwWpJnKbbd" target="_blank" rel="noopener noreferrer"className="flex items-center">
                <img src="emailimprovedres.png" alt="email" className=" h-3.5 w-5.5 drop-shadow-2xl hover:brightness-75"></img>
                </a>
                </div>
                
            </div>

               
            
        </div>
        
        
        </div>
        </nav>
    );
};