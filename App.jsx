import React from 'react'

function App(){
   let date=new Date();
   let hour=date.getHours();
   const csstyle={};
   let greeting="";
   if(hour>1&&hour<12)
   {
      greeting="Good Morning";
      csstyle.color="green";
   }
   else if(hour>=12&&hour<20)
   {
    greeting="Good AfterNoon";
    csstyle.color="orange";
   }
   else if(hour>=20&&hour<=24)
   {
    greeting="Good Night";
    csstyle.color="black"
   }
   return(
<>
 <div>
    <h1>Hello sir,<span style={csstyle}>{greeting}</span></h1>
 </div>
</>
   );
}
export default App;