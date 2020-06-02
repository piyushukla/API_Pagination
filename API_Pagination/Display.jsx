import React from 'react';

function Display({posts,load}){

  if(load===false){

    return( 
      <div className="center">
        <h1 >Loading...... </h1>
      </div>
    )
  }else {


    return (
     <ul className="mt-5" style={{paddingTop:"100px"}}>
        {posts.map(data =>{
         
          return (
           <div className="mt-2 mr-5 " > 
           <div className="card" style={{marginTop:"10px"}}> 
            
              <div className="card-header">
                <li style={{listStyle:"none"}}>Name : {data.name}</li>
              </div>
             <div className="card-body">
                <ol className="card-title">Episode: {data.episode}</ol>
                <ol className="card-title">Date: {data.air_date}</ol>
             </div> 
            </div>
            </div>
          
          )

        })}
         </ul>
    )
      }
}
export default Display;