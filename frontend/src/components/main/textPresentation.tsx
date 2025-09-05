import { config } from "../../config"

function TextPresentation(){
    return(
        <div className="textPresentation titleFont">
            <h1>{config.pagePresentation}</h1>
        </div>
    )
}

export default TextPresentation