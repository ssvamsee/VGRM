import Button from "react-bootstrap/esm/Button";
import homepageimage from "../../Assets/bg1.png"
import { Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

// import Signup from "../Registrations/Signup.js";

function Home(props){
    return(
        <>
        <div className="Homepage">
            <div className="Homepagecontainer">
                <div className="homepageimagecontainer">
                <img className="homepageimage" src={homepageimage} alt='homepageimage'/>
                </div>
                <div className="HPtextcontainer">
                    <div className="HPtextcon1-h2">
                        <h1>Shaping The Future Superiors</h1>
                    </div>
                    <div className="HPtextcon2-p">
                        <p>Admissions Are Open For 2023-24</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Home;