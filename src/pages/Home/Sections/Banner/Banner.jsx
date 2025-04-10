import imagemBanner from "../../../../assets/img/imagemBanner.png"
import Titulo from "../Services/TituloLeft"
import Text from "../Services/Text"
import ButtonLeft from "../Services/ButtonLeft"
import Titulo2 from "../Services/Titulo2"
function Banner (){
    return(
<section  
    className="h-screen lg:min-h-[900px] w-full flex flex-col justify-start text-white p-6 sm:p-8 lg:p-12 lg:items-start lg:text-left"
    style={{ backgroundImage: `url(${imagemBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="w-full max-w-2xl mt-36 lg:mt-56">
        <div className="text-black">
            <Titulo2 titulo2="Especialistas em Direito Previdenciário" />
        </div>
        <div className="text-black my-4">
            <Text text="O escritório atua  com foco em Direito Previdenciário, sendo especializado em benefícios do INSS e aposentadorias. Nosso compromisso é oferecer um serviço ético, eficiente e centrado na garantia dos direitos previdenciários." />
        </div>
        <div className="flex justify-start mt-4">
            <ButtonLeft tituloBtnLeft="Entre em contato" />
        </div>
    </div>
</section>
    )
}

export default Banner