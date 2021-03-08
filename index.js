import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const hello="Hello Sir";
let greeting="";
const time=new Date(2021, 5, 5, 14);
const hourTime =time.getHours();
const cssStyle={};

let backurl='';




if(hourTime>1 && hourTime<11)
{
  greeting ="Good Morning";
  backurl="https://unsplash.com/s/photos/morning";
  
  cssStyle.color='green';
  cssStyle.backgroundImage=`url(${backurl})`
  
  
  
}
else if(hourTime>11 && hourTime<18){
 greeting="Good Afternoon";
 backurl="https://unsplash.com/s/photos/afternoon";

 cssStyle.color='Orange'
 cssStyle.backgroundImage=`url(${backurl})`
}
else{
  greeting="Good Evening";
  backurl="https://unsplash.com/s/photos/evening";
  
  cssStyle.color='Black'
  cssStyle.backgroundImage=`url(${backurl})`
}



ReactDOM.render(
 <>
 <div >
   
   <h1 >{hello},<span style={cssStyle}>{greeting}</span></h1>
    
   
 </div>
 
 </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsu
