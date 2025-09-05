import TargetContainer from "../targets/targetContainer.js"
import Catalog from "../pages/catalog.js"
import TextPresentation from "./textPresentation.js"

function Home() {
    return (
        <div className="home">
            <TextPresentation></TextPresentation>
            <TargetContainer></TargetContainer>
            <Catalog></Catalog>
        </div>
    )
};

export default Home