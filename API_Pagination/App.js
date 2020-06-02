import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Search from './Search'
import Display from './Display'

function App() { 
 
 const [posts,setposts] = useState([])
 const [page,setpage] = useState(); 
 const [num,setnum] = useState(1)
 const [loading, setloading] =  useState(false)
 const[search,setsearch] = useState([])
 const [searchoutput, setsearchoutput] = useState("");
 const [nodata,seterror]= useState("");
 const [timer,settimer] = useState();
useEffect(()=>{

  fetch('https://rickandmortyapi.com/api/episode/?page='+num)
  .then(Response => Response.json())
  .then(output =>{
      setposts(output.results)
      setpage(output.info.pages)
       setloading(true);
  })
  
},[num])


  useEffect(()=>{
      
      clearTimeout(timer)
       var time  =  setTimeout(()=>{ 
  
        fetch('https://rickandmortyapi.com/api/episode/?name='+ searchoutput)
        .then(resp => resp.json())
        .then(output =>{ 
           if(output.results){
              setposts(output.results)
              seterror("")
           }else {
             seterror(output.error)
           }
        })   
        .catch(()=>{

                
                console.log("error")
        })
       
      },400)
     settimer(time)
      
  },[searchoutput])


const pagenumber=[];
for(let i=1; i<=page; i++){

    pagenumber.push(i);
}

// var filter = posts.map(item =>
//    item.name.toLowerCase().includes(search.)
//   )

  console.log(posts)
 
  return (
  
 
  <div>
     <div className="">
      <h1 className="text-center fixed-top" style={{backgroundColor:"grey"}}>The Rick and Morty Show</h1>  
       <Search  searchbox={(data)=>{
        setsearchoutput(data)
      
       }} load={loading} />
    </div>

    {nodata.length === 0?
  
        <Display posts={posts} load={loading} />   
     :
    
        <h1 style={{marginTop:"120px",textAlign:"center",fontSize:"25px",color:"Red"}} >{nodata}</h1>
    
    
   }
    
    {nodata.length !== 0 ?
        null
    :
    <div className="ml-4" style={{textAlign:"center"}}>

        {pagenumber.map(number =>{ 
          return <a href="#"  className="btn btn-primary pl5 ml-2 mt-2" onClick={()=>{
            setnum(number)
          }}>{number}</a>
        })}
    
    </div>
}
     </div>
    
  );
}

export default App;
