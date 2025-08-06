function CardEquipe({ nomeColaboradora,descricaoColaboraadora,foto }) {
    return (
        <div className="relative w-80 mx-auto flex flex-col"> 
           
            <img className="w-full h-96 sm:h-96 object-cover" src={foto} alt="Foto da Colaboradora" />

            
            <div className="absolute -bottom-20 sm:left-12 bg-white p-4 w-full shadow-lg">
                <h2 className="text-lg font-semibold text-center sm:text-left">{nomeColaboradora}</h2>
                <p className="text-gray-600 text-sm text-center sm:text-left">
                    {descricaoColaboraadora}
                </p>
            </div>
        </div>
    );
}

export default CardEquipe;