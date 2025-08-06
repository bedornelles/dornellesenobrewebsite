import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logo from "../../../../assets/img/Logo.png"

function Footer() {
    return (
        <footer className="bg-[#f8f2ea] text-black py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:justify-items-center">
                {/* Logo + Descrição */}
                <div className="space-y-4">
                    <img src={Logo} alt="Logo" className="h-20" />
                    <p className="text-sm leading-relaxed">
                        Acreditamos em uma advocacia humana e comprometida com a transformação social, que utiliza o conhecimento previdenciário como instrumento de dignidade e mudança de vidas. 
                    </p>
                </div>

                <div>
                    <h3 className="text-gold1 font-roboto text-base mb-2">HORÁRIO</h3>
                    <p className="font-oswald font-light">Online das 09:00 às 17:30</p>
                    <p className="font-oswald font-light">Presencial das 13:30 às 17:30 </p>
                    <h3 className="text-gold1 font-roboto text-base mb-2 mt-3">CONTATO</h3>
                    <p className="font-oswald font-light">(51) 9 8284-8457</p>
                    <p className="font-oswald font-light text-lg">dornellesenobreadv@gmail.com</p>
                </div>

                <div>
                    <h3 className="text-gold1 font-roboto text-base mb-2">ENDEREÇO</h3>
                    <p className="font-oswald font-light">R. Bento Gonçalves, 165 - Sala 410<br />Centro, Torres - RS, 95560-000</p>
                    <h3 className="text-gold1 font-roboto text-base mb-3 mt-3">REDES SOCIAIS</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="https://www.instagram.com/dornellesenobreadv/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/dornellesenobreadv/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5551982848457&text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
