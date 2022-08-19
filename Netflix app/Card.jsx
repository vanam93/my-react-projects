import React from 'react';

function Card(props){
    return(
        <>
           
            <div className="Card" >
                <img src={props.imgsrc} alt={props.sname} className="img_class"></img>
                <div className="Card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank" ><button>WatchNow</button></a>
                  
                </div>
            
        </div>
        </>
    );
}
export default Card;