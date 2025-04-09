function Button({ tituloBtn }) {
    return (
        <div className="flex">
            <a href="https://wa.me/5551994717575" target="blank" rel="noopener" >
                <button className="bg-second hover:bg-neutral-800 font-thin font-roboto text-slate-100 rounded-lg px-5 py-2 text-xl">{tituloBtn}</button>
            </a>
        </div>
    )

}

export default Button