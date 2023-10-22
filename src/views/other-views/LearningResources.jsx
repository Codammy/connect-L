import { Link } from "react-router-dom";
import "./styles.css"

export function Header({title}){
    return (<>
        <div>
            <h1 style={{margin: "auto 25px"}}>{title}</h1>
        </div>
        <nav><Link to="/learn" style={{margin: "25px"}}>Go Back</Link></nav>
        </>
    )
}
function LearningResources() {
    return ( <>
        <Header title="#Learning_Resources"></Header>
    </> );
}

export default LearningResources;