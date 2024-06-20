import { Link } from "react-router-dom";
import "./DisplayCard.css"

function DisplayCard({ name, image, id }) {
  const urlCharacter = `/characters/${id}`;
  return (
    <Link to={urlCharacter}>
    <div className="card_Container">
        <div className="global_Card">
            <img className="card_image" src="../../public/1.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/2.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/3.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/4.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/5.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/6.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/12.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/13.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/14.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/15.png" alt="1" />
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/16.png" alt="1" />
        </div>
    </div>
      
    </Link>
  );
}

export default DisplayCard;