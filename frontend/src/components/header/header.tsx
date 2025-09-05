import { config } from "../../config.ts";
import NavBar from "./navBar.tsx";

function Header() {
    return <header>
        <NavBar isFooter={false}></NavBar>
        <div className="title">
            <img src={config.logoUrl} alt=""/>
        </div>
    </header>
}

export default Header