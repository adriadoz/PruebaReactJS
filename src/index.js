import React from 'react';
import ReactDOM from 'react-dom';


const Saludo = (props) => {
 return(
     <div>   
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
     </div>
 )
}
ReactDOM.render(
    <Saludo title='Hello world from props' subtitle='Subtitleeee'/>,
    document.getElementById('app')
)