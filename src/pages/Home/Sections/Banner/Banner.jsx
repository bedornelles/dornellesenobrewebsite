import imagemBanner from "../../../../assets/img/imagemBanner.png"
import Titulo from "../Services/TituloTwist"
import Text from "../Services/Text"
import Button from "../Services/Button"
function Banner (){
    return(
<section  
    className="h-auto lg:min-h-[900px] w-full flex flex-col items-center justify-center text-white p-6 sm:p-8 lg:p-12 lg:items-start lg:justify-center lg:text-left"
    style={{ backgroundImage: `url(${imagemBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="w-full max-w-2xl">
        <div className="text-black">
            <Titulo tituloTwist="Especialistas em Direito Previdenciário" />
        </div>
        <div className="text-black my-4">
            <Text text="O escritório atua  com foco em Direito Previdenciário, sendo especializado em benefícios do INSS e aposentadorias. Nosso compromisso é oferecer um serviço ético, eficiente e centrado na garantia dos direitos previdenciários." />
        </div>
        <div className="flex justify-center lg:justify-start mt-4">
            <Button tituloBtn="Entre em contato" />
        </div>
    </div>
</section>
    )
}

export default Banner