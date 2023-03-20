import { useRef, useState } from "react"

const Get1=()=>{
    const id=useRef(0)
const [obj,setObj]=useState({})
    return(
    <>
    <div className="row">
        <div className="col-auto mx-5">
            <div className="form-group">
                <input type={"text"} className="form-control" placeholder="Search By Id" ref={id}></input>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-auto">
            {
                Object.keys(obj)==0?(<div></div>):(<table>
                    <thead>
                        <tr>
                            <th>Sid</th>
                            <th>Sname</th>
                            <th>course</th>
                            <th>fee</th>
                            <th>Maths</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th>Total</th>
                            <th>percentage</th>
                            <th>Grade</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>)
            }
        </div>
    </div>
    </>
)
}
export default Get1