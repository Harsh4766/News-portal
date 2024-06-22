import React from "react";

function Pagination({totalposts,postperpage,setCurrentPage,currentpage}){
    const pages=[];
    for(let i=1;i<=Math.ceil(totalposts/postperpage);i++){
        pages.push(i);
    }
    return (
    <div className="pagination" style={{display:"flex",justifyContent:"center",gap:"30px",marginBottom:"10px"}}>
        {pages.map((page,index)=>{
            return (
                <button 
                  className={`btn btn-outline-primary ${page === currentpage ? 'active' : ''}`} 
                  key={index} 
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
              
        })
        }
        </div>
    )
}

export default Pagination;