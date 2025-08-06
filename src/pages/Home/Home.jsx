import Hero from "./Sections/Hero/Hero"
import Banner from "./Sections/Banner/Banner"
import Card from "./Sections/Services/Card"
import Button from "./Sections/Services/Button"
import Titulo from "./Sections/Services/Titulo"
import About from "./Sections/About/About"
import CardEquipe from "./Sections/Services/CardEquipe"
import fotoFran from "../../assets/img/FranPerfil.jpeg"
import fotoAida from "../../assets/img/AidaPerfil.jpg"
import Footer from "./Sections/Services/Footer"

function Home() {

    return (
        <>
            <Hero />
            <Banner />
            <div className="flex justify-center mt-8 lg:mt-4">
                <Titulo tituloCenter="CONHEÇA NOSSOS SERVIÇOS" />
            </div>
            <div className="justify-items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-stretch justify-center p-9 gap-9">
                    <Card 
                        tituloServico="APOSENTADORIAS" 
                        descricaoServico={[
                            "Por idade urbana e rural",
                            "Por tempo de contribuição",
                            "Especial (Exposição a agentes nocivos)",
                            "Pessoa com deficiência",
                            "Por invalidez"
                        ]}
                    />
                    <Card 
                        tituloServico="BENEFÍCIOS" 
                        descricaoServico={[
                            "Auxílio por incapacidade temporária",
                            "Salário-maternidade",
                            "Salário-família",
                            "Pensão por morte",
                            "Benefício de Prestação Continuada – BPC/LOAS (para idosos e pessoas com deficiência de baixa renda)"
                        ]}
                        />
                    <Card  
                        tituloServico="PLANEJAMENTO PREVIDENCIÁRIO"
                        descricaoServico={[
                            "Simulação de tempo de contribuição",
                            "Projeção da melhor aposentadoria",
                            "Análise do histórico de contribuições (CNIS)",
                            "Estratégia para contribuintes facultativos e autônomos",
                            "Identificação de oportunidades de averbação e revisão"
                        ]}
                    />
                    <Card 
                        tituloServico="AVERBAÇÃO E ATUALIZAÇÃO"
                        descricaoServico={[
                            "Averbação de tempo rural",
                            "Inclusão de vínculos e contribuições faltantes",
                            "CTC – Certidão de Tempo de Contribuição",
                            "Acerto de vínculos e correção de dados no CNIS",
                            "Inclusão de períodos especiais (insalubridade/periculosidade)",
                            "Retificação de dados cadastrais do segurado e dependentes"
                        ]}
                    />
                    <Card 
                        tituloServico="RECURSOS ADMINISTRATIVOS"
                        descricaoServico={[
                            "Elaboração de recursos contra indeferimentos de benefícios",
                            "Requerimentos de revisão administrativa",
                            "Justificações administrativas",
                            "Acompanhamento de processos pelo Meu INSS e e-SISRE"
                        ]}
                    />
                    <Card 
                        tituloServico="SERVIÇOS JUDICIAIS PREVIDENCIÁRIOS" 
                        descricaoServico={[
                            "Por idade urbana e rural",
                            "Por tempo de contribuição (com e sem pontos)",
                            "Especial (Exposição a agentes nocivos)",
                            "Pessoa com deficiência",
                            "Por invalidez"
                        ]}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <Button tituloBtn="Fale Com Um Especialista" />
            </div>
            <About/>
            <div className="flex justify-center mt-8 lg:mt-4">
                <Titulo tituloCenter="CONHEÇA NOSSA EQUIPE" />
            </div>
            <div className="justify-items-center sm:text-center mt-4 text-center">
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-24 sm:gap-12 md:gap-16 my-10">
                    <CardEquipe nomeColaboradora="Aida Dornelles"
                        descricaoColaboraadora="Advogada, formada no FMP - Fundação Superior do Ministério Público em 2011 e pós-graduada em Direito Previdenciário."
                        foto={fotoAida} />
                    <CardEquipe nomeColaboradora="Francine Nobre"
                        descricaoColaboraadora="Advogada, formada na ULBRA - Universidade Luterana do Brasil em 2019 e pós-graduada em Direito Previdenciário."
                        foto={fotoFran} />
                </div>
            </div>
            <div className="mt-32">
                <Footer/>
            </div>
        </>

    )
}

export default Home