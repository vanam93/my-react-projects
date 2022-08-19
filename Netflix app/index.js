import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card.jsx'
import Sdata from './Sdata'
import './index.css'

ReactDom.render(
  <>
  <div style={{color:"blue",textAlign:"center"}}><h1>Welcome to Netflix</h1></div>
  <div className="Cards" >
{ 
Sdata.map(
    (val)=>{
    return(
        <Card
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
       )
   }
)
};
 </div>
  </>,
    document.getElementById('root')
)