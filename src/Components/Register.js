import { useState,useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const [flag2,setFlag2]=useState(false)
    const [flag,setFlag]=useState(false)
    const sid=useRef();
    const sname=useRef();
    const course=useRef();
    const fee=useRef();
    const s1=useRef()
    const s2=useRef()
    const s3=useRef()
    const [res,setRes]=useState(true)
    const [img,setImg]=useState("")
    const id=useRef(0);
    const password=useRef("")
    const navigate=useNavigate()




const reg=()=>{
    setFlag2(false)
}
const log=()=>{
    setFlag2(true)
}


const login=()=>{
    axios.post("http://localhost:2022/login",{
        "sid":id.current.value,
        "password":password.current.value
    }).then((p)=>{
const {data}=p
if(data){
navigate(`/dashboard/`,{ state: { data: id.current.value } })
}else{
    navigate("/error")
}
    },(e)=>{
        console.log(e)
    })
}




    const imageChange=(event)=>{
        const file=event.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setImg(reader.result)
        }

    }
    
const func_one=()=>{
    setFlag(true)
    
    axios.post("http://localhost:2022/save",{
        "sid":sid.current.value,
        "sname":sname.current.value,
        "password":course.current.value,
        "fee":fee.current.value,
        "s1":s1.current.value,
        "s2":s2.current.value,
        "s3":s3.current.value,
        "image":img
    }).then((p)=>{
        setRes(true)
    },(e)=>{
        console.log(e)
    })
    setFlag(false)
   setTimeout(()=>{
    setRes(false)
   },2000) 
}
    
return(
    <>
     <div id="register" className="row">
        <div style={{width:`63%`,borderRadius:`25px`}} className="col-12">
          {
           res?(<div></div>):(<><div className='alert alert-primary alert-dismissible mt-2 mx-3' style={{width:`1200px`}} role="alert"><i style={{height:30,width:30}} class="fa fa-check-circle" aria-hidden="true"></i>Student Registration successful<button type={"button"} className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button></div> </>)
          }  
        </div>
        
    </div>
    <div style={{borderRadius:`10px`,marginTop:`-10px`}} className="row">
        
        <div className="col-4"></div>
        
        {
            flag2?(
                <div style={{marginTop:`170px`,marginLeft:`50px`}} className="col-auto" >
            <h4 className="text-center"> Login</h4>
            <div className="form-group mt-3">
                <input type={"number"} className="form-control form-control-sm" ref={id} placeholder="Enter Id"></input>
            </div>
            <div className="form-group mt-3">
                <input type={"password"} className="form-control form-control-sm"  ref={password} placeholder="Enter Password"></input>
            </div>
            <div className="form-group mt-3">
                
                <button className="btn btn-outline-primary mx-4" onClick={reg}>Register</button>
                <button onClick={login} className="btn btn-outline-success  mx-5">Login</button>
            </div>
        </div>
            ):(
                <div style={{}} className="col-auto mt-5 mx-5  ">
                <div style={{padding:3,textAlign:`center`}} className="form-group  mx-2">
                    <h4 className="title text-dark">Student Registration</h4>
                </div>
                <div className="form-group">
                    <input type={"number"} ref={sid} className="form-control form-control-sm" placeholder="Enter Student Id"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"text"} ref={sname} className="form-control form-control-sm" placeholder="Enter Student Name"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"password"} ref={course} className="form-control form-control-sm" placeholder="Enter Student Password"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"number"} ref={fee} className="form-control form-control-sm" placeholder="Enter Student fee"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"number"} ref={s1} className="form-control form-control-sm" placeholder="Enter Marks in Maths"></input>
                </div>
                <div className="form-group sm mt-2">
                    <input type={"number"} ref={s3} className="form-control form-control-sm" placeholder="Enter Marks in Chemistry"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"number"} ref={s2} className="form-control form-control-sm" placeholder="Enter Marks in physics"></input>
                </div>
                <div className="form-group mt-2">
                    <input type={"file"} onChange={imageChange} className="form-control form-control-sm btn-primary" ></input>
                </div>
                <div className="form-group mt-2">
                <button onClick={func_one} className="btn btn-outline-success mx-5 mt-2">Register</button>
                <button className="btn btn-outline-primary mx-3 mt-2" onClick={log}>Login</button>
                </div>
                
    
            </div>   
            )
        }
        <div className="col-4 mt-4">
       
        </div>
        
        </div>
       
    </>
)
}
export default Register