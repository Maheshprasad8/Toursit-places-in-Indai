import { useState } from "react";


function Card({ id, image, info, price, name,removeTour}) {
    const [readmore, setReadmore] = useState(false);

    const description = `${info.substring(0, 200)}....`;

  
  
    function readmoreHandler(){
        setReadmore(!readmore);
    }

   
    return (
        <div className="card">
            <img src={image} className="image" alt={name} />
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour_price">₹{price}</h4>
                <h4 className="tour_name">{name}</h4>
            </div>

          
           <div className="description">
                {readmore ? description : `${description.substring(0, 100)}...`}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? 'Show less' : 'Read more'}
                </span>
            </div>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>Not interested</button>
        </div>
    );
}

export default Card;
