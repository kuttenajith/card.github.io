import React from 'react';
import ReactDom from 'react-dom';
import "./App.css";


//import Selectcomponent from './component/selectcomponent';
import  Cardcomponent  from './component/card/cardcomponent';
import Cards from './component/card/cardcomponent';




class App extends React.Component {
   render() {
     
     return (
       <div>
          <form>
         <div classNameName="card-header">
           <div classNameName="row d-flex justify-content-between">
             <Cardcomponent  div className={Cards}></Cardcomponent>
           </div>
         </div>
         </form>
       </div>
     );
   }
 }
 export default App;


