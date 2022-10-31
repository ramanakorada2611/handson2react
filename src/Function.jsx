

import React,{ useState } from "react"
 
let Function=()=>{
   let[name,setName]=useState("")
   let[department,setDepartment]=useState("")
   let[rating,setRating]=useState("")
   let[want,setWant]=useState([])

   let print=(val)=>{
      val.preventDefault()
     console.log(name,department,rating)
    if(name && department && rating){
      setName("")
      setDepartment("")
      setRating("")
      setWant((data)=>[...data,{name,department,rating}])
   }
   }
  return(
   <><center>
      <h1 className="color">EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={print}>
         <label className="style"><span className="center1">NAME:</span>
         <input type="text" className="form-control" placeholder="Username" value={name} onChange={(val)=>{setName(val.target.value)}} />
         </label><br></br>
         <label className="style"><span className="center2">DEPARTMENT:</span>
         <input type="text" className="form-control" placeholder="Userdepartment" value={department} onChange={(val)=>{setDepartment(val.target.value)}} />
         </label><br></br>
         <label className="style"><span className="center3">RATING:</span>
         <input type="number" className="form-control" placeholder="Userrating" value={rating} onChange={(val)=>{setRating(val.target.value)}} />
         </label><br></br><br></br>
         <button className="btn btn-dark" >SUBMIT</button>
      </form>
   </center>
   <hr></hr>
   <div className="box">
   {
     want.map((a)=>
      <div className="smallbox">
      [name:{a.name},
      department:{a.department},
      rating:{a.rating}]
      </div>

     )
   }</div>
   </>
  )
   }
  
export {Function}
 
// {/* <center>
//       <h1 className="color">EMPLOYEE FEEDBACK FORM</h1>
//          <form>
//             <center className="center">
//             <label className="style"><span className="center1">NAME:</span>
//             <input type="text" className="form-control" placeholder="Username" />
//             </label><br></br>
//             <label className="style"><span className="center2">DEPARTMENT:</span>
//             <input type="text" className="form-control" placeholder="Userdepartment" />
//             </label><br></br>
//             <label className="style"><span className="center3">RATING:</span>
//             <input type="number" className="form-control" placeholder="Userrating" />
//             </label><br></br><br></br>
//             <button className="btn btn-dark" onClick={Function}>SUBMIT</button>
//             </center>
//          </form><hr></hr>
//       </center>
//          <div className="box"></div>   */}


// let [name,setName]=useState("")
// let [email,setEmail]=useState("")
// let [list,setList]=useState([])
// let submit=(e)=>{
//    e.preventDefault();
//    console.log(name,email)
//    // let data={name,email}
//    if(name && email){
//     setList((ls)=>[...ls,{name,email}])
//     setName("")
//     setEmail("")
//    }
// }

// return(
 
//    <>
//    <form onSubmit={submit}>
//    <input name="name" placeholder="name" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
//    <input name="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
//    <button>add</button>
//    </form>{
//       list.map((a)=><div>
//          <li>{a.name}</li>
//          <li>{a.email}</li>
//       </div>)
//    }
//    </>
// )