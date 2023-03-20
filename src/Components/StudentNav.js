import axios from "axios"
import $ from 'jquery'
import { useState } from "react"
const StudentNav=(props)=>{

const [students,setStudents]=useState([])


    const getRanks=()=>{
        axios.get(`http://localhost:2022/getranks`).then((p)=>{
           const {data}=p
           setStudents(data)
           
            $('#exampleModal1').modal('show');
        },(e)=>{
console.log(e)
        })
    }
return(
    <>
    <div className="row">
        
       
        <div className="col-9">
        </div>
        <div className="col-1">
       <span>&nbsp;<i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home</span> 
        </div>
        <div className="col-1">
        <span data-bs-toggle={"modal"} data-bs-target={"#exampleModal1"} onClick={getRanks}> <i class="fa fa-graduation-cap" aria-hidden="true"></i> Ranks</span> 
        </div>
        <div className="col-1">
        <span><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</span>
        </div>
       
    </div>



    <div className="modal modal-lg fade" id="exampleModal1" tabIndex={"-1"}>
        <div className="modal-dialog">
          <div
           
            className="modal-content"
          >
            <div  className="modal-header">
          <h2 >Top Rankers</h2>
              
              <button
              
                type={"button"}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label={"Close"}
              ></button>
            </div>
            <div className="modal-body" >
            <div style={{overflowY:`scroll`,overFlowY:`hidden`,maxHeight:`300px`}} className="containerr" >
             <div className="row">
                
                {students.map((e,i)=>{
                        return(
                           

                           
                            <div style={{borderRadius:`10px`,borderBox:`border-box`,padding:`20px 20px 0px 20px`,background:`linear-gradient(45deg,white,rgb(150, 232, 255))`,width:`140px`}} className="col-1 mt-2 mx-4">
                               <i style={{top:-20,left:0,fontSize:`30px`}} >{i+1}</i>
                                <img src={e.image} style={{height:100,width:100,borderRadius:`50px`,marginBottom:`15px`}} ></img>
                                <p style={{alignSelf:`center`,marginLeft:`22px`}}>{e.sname}</p>
                                <p style={{textAlign:`center`,marginLeft:`22px`}} ><b>{e.percentage.toFixed(2)}%</b></p>
                            </div>
                           
                        )
                    })
                }
                   
              
             </div>
             </div>
            </div>
            <div className="modal-footer ">
            
             
            <button type={"button"} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            
            </div>
          </div>
        </div>
      </div>






    </>
)
}
export default StudentNav