function Card({tituloServico, descricaoServico}){
    return(
            <div className="bg-gold2 shadow-lg border border-gold1 rounded-2xl p-6 w-full max-w-xs">
                <h2 className="font-oswald font-thin text-xl text-gold1"> {tituloServico} </h2>
                <p className="text-gray-600"> {descricaoServico} </p>
            </div>
    )
}

export default Card