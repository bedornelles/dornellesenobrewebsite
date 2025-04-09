import TituloTwist from "../Services/TituloLeft"
import Text from "../Services/Text"
import imagemEstatueta from "../../../../assets/img/Estatueta.jpg"

function About() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2 text-center lg:text-left p-6"> 
                <div className="mb-5">
                    <TituloTwist tituloTwist="SOBRE NÓS"/>
                </div>
                <Text text="No escritório Dornelles & Nobre, acreditamos que dignidade e justiça devem ser acessíveis a todos. Atuamos com foco em soluções rápidas, priorizando o atendimento administrativo e extrajudicial para garantir benefícios previdenciários justos e adequados."/>
                <br/><Text className="<br>" text="
                Valorizamos a comunicação simples e direta, sem “juridiquês”, para que cada cliente compreenda o processo com clareza. Por meio de um planejamento previdenciário cuidadoso, buscamos sempre o benefício mais vantajoso, promovendo mais tranquilidade e qualidade de vida."/>
                <br/><Text text="Nosso atendimento é sempre humanizado e personalizado. Seja em nosso escritório ou onde o cliente se sentir mais confortável, valorizamos o cuidado com cada detalhe, pois entendemos que cada história é única — e merece atenção especial."/>
            </div>
            <div className="mt-10 lg:mt-0">
                <img className="w-full lg:w-72 rounded-lg" src={imagemEstatueta} alt="" />
            </div>
        </div>
    )
}

export default About