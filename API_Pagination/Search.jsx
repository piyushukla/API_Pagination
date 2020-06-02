import React from 'react'

function Search({searchbox,load }){

    if(load===false){

        return (
            null
        )
    }
else {
    return (
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <div className="fixed-top mt-5 " style={{textAlign:"center",backgroundColor:"grey",height:"70px"}}>
        
            <input 
             type="text"
             className="form-control form-control-sm ml-3 w-75"
             aria-label="Search"
             placeholder="Search Data By Name"
             onChange={(e)=>{
                 searchbox(e.target.value)
             }}

             style={{marginTop:"10px"}}

                />
               
        </div>
        </form>
    )
            }
}
export default Search