import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
function HCitation(props) {
    return (
        <div class="row">
            <div class="col">
                <div class="hero-cite text-center">{props.citation}</div>
                <hr />
            </div>
        </div>
    );   
}

export default HCitation;