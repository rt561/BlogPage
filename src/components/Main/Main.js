import React from'react';
import './Main.css';



const Main=()=>
{
  return(

  <div className="blog-post" style={{backgroundColor:'white',textAlign:'center',width:'100%',boxShadow:'0px 0px 2px grey'}}>
    <div className='flex-container'style={{justifyContent:'center',marginTop:'20px'}}>
    <div className="blog">
        <img src="images/1.png"style={{height:'200px',padding:'10px'}}/>
     </div>  
    
    <div class="blog-list-box">
                  <h3><a href="single-blog.html" style={{padding:'15px'}}>Top Software Development<br></br>
                  Companies in London – <br></br>
                  Compare Quotes</a></h3>
                  <p class="blog-desc"style={{padding:'15px'}}>Kickstart the growth of your business with a professionally <br></br>
                  designed website and software development services offered by<br></br>
                   Logicsofts, one of the leading software development</p>
                  <a href="single-blog.html" class="btn btn-white arrow-btn">Read more</a>
                  
                  
                      <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                    </div>

                    
                    
                    
                  </div>
        
    </div>
    
      



  )

}
export default Main;