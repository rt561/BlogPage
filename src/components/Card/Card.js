import React, { useState,useEffect } from "react";
import Pagination from './Pagination';
import './Card.css';


const Card = () => {
  
  const[posts, setPosts]=useState([])

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  //console.table(data)
  useEffect(()=>{
    setLoading(true);
  fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
  result.json().then((resp)=>{
  //console.warn(result,resp)
  setPosts(resp);
  setLoading(false);
  
  })
  })
},[])

  
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfLastPost);
// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

  
  
  return (
    <>
    <div className="blo">
    <div style={{width:"70%",justifyContent:'space-evenly',display:'flex',flexWrap:'wrap' }}>
       {currentPosts?.map((item, index) => (
             
          <div
            className="blog-post"
            style={{
              backgroundColor: "white",
              textAlign: "center",
              width: "30%",
            }}
          >
            <div
              className="flex-container"
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <div
                className="blog1"
                style={{ border: "1px", boxShadow: "0px 0px 2px grey" }}
              >
                <img
                  src="images/2.png"
                  style={{ height: "150px", padding: "25px" }}
                />
<p>{item.title}</p> 
</div>
              
            </div>
</div>

  ))}
  </div>
 <div
                className="blog3"
                style={{
                  
                  border: "1px",
                  boxShadow: "0px 0px 2px grey",
                  backgroundColor: "#ecf2fa",
                  
                }}
              >
                <div className="sidebar">
                  <img
                    src="images/s1.jpg"
                    style={{
                      height: "120px",
                      marginTop: "12px",
                      padding: "20px",
                    }}
                  />
                </div>
                <div className="sidebar2">
                  <img
                    src="images/r2.jpg"
                    style={{
                      height: "130px",
                      marginTop: "12px",
                      padding: "20px",
                    }}
                  />
                </div>
</div>
</div>
<Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      
    </>
  );
};

export default Card;
