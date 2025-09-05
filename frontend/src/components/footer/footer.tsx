import SocialMedia from "./socialMedia.tsx"

import { config } from "../../config.ts"
import NavBar from "../header/navBar.tsx"

function Footer() {
    return <footer id="footer">
        <NavBar isFooter={true}></NavBar>
        <SocialMedia data={config.socialMedia}></SocialMedia>
    </footer>
}

export default Footer