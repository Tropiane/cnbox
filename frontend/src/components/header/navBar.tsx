import LinkTarget from "./linkTarget.tsx"
import { IoMenuSharp } from "react-icons/io5"
import { config } from "../../config.ts"

const enlaces = config.navBarLinks

function NavBar({isFooter}: {isFooter: boolean}) {
    const phoneWidth = window.matchMedia("(max-width: 480px)").matches
    if(isFooter === true){
        return(
            <div className="footerNav">
                {enlaces.map(enlace => <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text}></LinkTarget>)}
            </div>
        )
    }else if(phoneWidth === true){
        return <nav className="navPhone">
            <details>
                <summary><IoMenuSharp className="menuIcon"></IoMenuSharp></summary>
                <div className="navPhoneLinks">
                <a href="#footer" className="link fontNav">Contacto</a>
                {enlaces.map(enlace => <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text}></LinkTarget>)}
                </div>
            </details>
        </nav>
    }
    return <nav>
            <a href="#footer" className="link fontNav">Contacto</a>
            {enlaces.map(enlace => <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text}></LinkTarget>)}
        </nav>
}

export default NavBar