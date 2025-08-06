function Card({tituloServico, descricaoServico}){
    return(
            <div className="bg-gold2 shadow-lg border border-gold1 rounded-2xl p-6 w-full max-w-md flex flex-col h-full">
                <h2 className="font-oswald font-thin text-xl text-gold1 mb-1"> {tituloServico} </h2>
                <ul className="text-gray-600 list-disc list-inside mt-2">
                    {descricaoServico.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
    )
}

export default Card