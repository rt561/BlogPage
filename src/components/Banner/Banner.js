import React from 'react';
import './Banner.css';
const Banner=()=>
{
  return(
  <div className="main" style={{backgroundColor:'#063970',height:'400px',width:'100%'}}>
  <div>
  
  
  <h1>Smart marketing<br></br>
  starts here</h1>
  <h4>Join over 150,000 marketing managers who get our best digital marketing<br></br>
    insights, strategies and tips delivered straight to their inbox.</h4>
    

    </div>

     <div class="form-group">
    < input type="email" name="" placeholder="Enter your email"className='in'
    />
    <button className="banner-button">Subscribe</button>
    </div> 
    
    
  </div>
  )
}
export default Banner;