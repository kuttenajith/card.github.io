import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';




 class Cards extends React.Component {
   render() {
     return (
       <div className="col-lg-3 col-sm-6 col-12 dash">
         <div className="card card-stats br-blue">
           <div className="card-header text-center bg-new-blue">
             <h4>views</h4>
           </div>
           <div className="card-body">
             <div className="row">
               <div className="col-sm-6 p-3">
                 <span className="total">Total</span>
                 <span className="total-value">1,200</span>
                 <span className="text-danger-new">
                   <i className="fa-fa-arrow-down" /> 52%
                 </span><br></br>
                 <span className="span-des mt-2">
                   Compare with same days last period
                 </span>
               </div>
               <div className="col-sm-6 bg-new-grey p-3">
                 <div className="current-content">
                   <span className="curated-content span-des">
                     Curated Content
                   </span>
                   <div className="curate">
                     <div className="curated-value">3,267</div>
                     <div className="curated-per new-danger">
                       <i className="fa fa-arrow-down" /> 52%
                     </div>
                   </div>
                 </div>
                 <div className="current-content">
                   <span className="curated-content span-des">Spotlight</span>
                   <div className="curate">
                     <div className="curated-value">3,267</div>
                     <div className="curated-per new-success">
                       <i className="fa fa-arrow-up" /> 52%
                     </div>
                   </div>
                 </div>
                 <div className="current-content">
                   <span className="curated-content span-des">Video</span>
                   <div className="curate">
                     <div className="curated-value">3,267</div>
                     <div className="curated-per new-danger">
                       <i className="fa fa-arrow-down" /> 52%
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }
 }
 
export  default  Cards;