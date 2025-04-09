import imagemLogo from "../../../../assets/img/Logo.png"

function Hero() {
    return (
        <>
        <header className='bg-primary h-28 w-screen grid grid-cols-2 items-center pl-32'>
        <img className='w-40' src={imagemLogo} alt="" />
      <nav className='list-none justify-center hidden lg:flex'>
        <ul className='flex gap-5'>
          <li>HOME</li>
          <li>SOBRE</li>
          <li>SERVIÇOS</li>
          <li>CONTATOS</li>
        </ul>  
      </nav>
    </header>
        </>
  
    )
  }
  
  export default Hero