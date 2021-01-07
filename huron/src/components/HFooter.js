/*
Footer component to be used on every page with routing to social media pages
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './css/HFooter.css'


function HFooter(){
    return(
        <div className="foot container-fluid">
            <div className="mb-2">
                <div className="row">
                    <div className="col mx-2">
                        This website was made by the 2021 BPA Website Design Team of the Huron BPA Chapter; the prompt, create a planning website for the 2021 BPA National Conference.
                    </div>
                </div>
                <div className="row pb-2 mt-2">
                    <div className="col">
                        <a className="icon-inherit" href="mailto:huron.bpa@gmail.com"><FontAwesomeIcon size = '2x' icon={faPaperPlane} /></a>
                    </div>
                    <div class="col">
                        <a className="icon-inherit" target="_blank" href="https://github.com/Mrchow3/Huron2021WebsiteDesign"><FontAwesomeIcon size = '2x' icon={faCode} /></a>
                    </div>
                    <div class="col">
                        <a className="icon-inherit" target="_blank" href="https://twitter.com/National_BPA"><FontAwesomeIcon size = '2x' icon={faTwitter} /></a>
                    </div>
                    <div class="col">
                        <a className="icon-inherit" target="_blank" href="https://facebook.com/businessprofessionalsofamerica"><FontAwesomeIcon size = '2x' icon={faFacebook}  /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HFooter;