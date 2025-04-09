import Hero from "./Sections/Hero/Hero"
import Banner from "./Sections/Banner/Banner"
import Card from "./Sections/Services/Card"
import Button from "./Sections/Services/Button"
import Titulo from "./Sections/Services/Titulo"
import About from "./Sections/About/About"
import CardEquipe from "./Sections/Services/CardEquipe"
import rectangle from "../../assets/img/Rectangle.png"
import Footer from "./Sections/Services/Footer"

function Home() {

    return (
        <>
            <Hero />
            <Banner />
            <div className="flex justify-center mt-4">
                <Titulo tituloCenter="CONHEÇA NOSSOS SERVIÇOS" />
            </div>
            <div className="justify-items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center p-9 gap-9">
                    <Card tituloServico="TITULO CARD 1" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                    <Card tituloServico="TITULO CARD 2" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                    <Card tituloServico="TITULO CARD 3" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                    <Card tituloServico="TITULO CARD 4" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                    <Card tituloServico="TITULO CARD 5" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                    <Card tituloServico="TITULO CARD 6" descricaoServico="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque fringilla laoreet.." />
                </div>
            </div>
            <div className="flex justify-center">
                <Button tituloBtn="Fale Com Um Especialista" />
            </div>
            <About/>
            <div className="justify-items-center sm:text-center mt-4 text-center">
                <Titulo tituloCenter="CONHEÇA NOSSA EQUIPE" />
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-24 sm:gap-12 md:gap-16 my-10">
                    <CardEquipe nomeColaboradora="Colaboradora1"
                        descricaoColaboraadora="Turpis nunc sodales eros, elementum pretium lorem metus id turpis. Suspendisse elit enim, efficitur nec ex vitae, aliquam gravida purus."
                        foto={rectangle} />
                    <CardEquipe nomeColaboradora="Colaboradora2"
                        descricaoColaboraadora="Turpis nunc sodales eros, elementum pretium lorem metus id turpis. Suspendisse elit enim, efficitur nec ex vitae, aliquam gravida purus."
                        foto={rectangle} />
                    <CardEquipe nomeColaboradora="Colaboradora3"
                        descricaoColaboraadora="Turpis nunc sodales eros, elementum pretium lorem metus id turpis. Suspendisse elit enim, efficitur nec ex vitae, aliquam gravida purus."
                        foto={rectangle} />
                </div>
            </div>
            <div className="mt-32">
                <Footer/>
            </div>
        </>

    )
}

export default Home