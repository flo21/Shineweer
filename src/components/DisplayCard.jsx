import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./DisplayCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function DisplayCard({name}) {

  const [likeCounts, setLikeCounts] = useState({}); 

  useEffect(() => {
        // Initialize likeCounts from localStorage
        const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
        setLikeCounts(likeCounts);
        console.log("nb clic :",likeCounts);
  }, []);

  const handleLikeClick = (name) => {
    const likeCounts = JSON.parse(localStorage.getItem('likeCounts')) || {};
    likeCounts[name] = (likeCounts[name] || 0) + 1;
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
    setLikeCounts(likeCounts);
  };

  return (
    <div className="card_Container">
        
            <div className="global_Card">
                <Link to="/Product">
                    <img className="card_image" src="../../public/1.png" alt="1" />
                </Link>
                    <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                        <FontAwesomeIcon icon={faHeart} /> 
                    </button>
                
            </div>
        
        <div className="global_Card">
            <img className="card_image" src="../../public/2.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/3.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/4.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/5.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/6.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/12.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/13.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/14.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/15.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
        <div className="global_Card">
            <img className="card_image" src="../../public/16.png" alt="1" />
            <button onClick={(e) => { e.stopPropagation(name); handleLikeClick(name);}} className="like-button">
                <FontAwesomeIcon icon={faHeart} /> 
            </button>
        </div>
    </div>
      
  );
}

export default DisplayCard;