import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Chart from 'react-apexcharts'
import React from "react";
import axios from "axios";
import StudentNav from "./StudentNav";
const Dashboard=()=>{
    const [obj,setObj]=useState({})
    const {data}=useLocation().state
    let [maths,setMaths]=useState(0)
    let [ph,setPh]=useState(0)
    let [ch,setCh]=useState(0)
    
    
    const options = {
        chart: {
          type: 'pie',
        },
        series: [0,0,0],
        labels: ['MATHS', 'PHYSICS', 'CHEMISTRY'],
      };
      const [chartOptions, setChartOptions] = useState(options);
    useEffect(
        ()=>{
axios.get(`http://localhost:2022/get/${data}`).then((p)=>{
    const {data}=p
   let arr=[data.s1,data.s2,data.s3]

      let {series}=options
      for(let i=0;i<arr.length;i++){
        series[i]=arr[i]
      }
      
 
    setObj(data)

},(e)=>{
    console.log(e,`1111111111`)
})  
        },[]
    )
  
    return(

        <>
        <StudentNav obj={obj} ></StudentNav>
       {
        Object.keys(obj)==0?(<div className="fa fa-spinner fa-spin"></div>):(
            
            <div className="row">
                <div className="col-2 ">
                <img htmlFor="name" className="mx-3 mt-5" style={{height:300,width:250,borderRadius:`20px`}} src={obj.image}></img>
                
                <nav>
                    
            

                </nav>
                </div>
                
                <div style={{position:`absolute`,marginLeft:`260px`,marginTop:120}}  className="col-4">
                   <table className="table-info  w-75 table-hover table-striped table mx-5">
                    <thead></thead>
                    <tbody>
                         <tr>
                            <th>Id</th>
                            <td>{obj.sid}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{obj.sname}</td>
                        </tr>
                        <tr>
                            <th>Fees</th>
                            <td>{obj.fee}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{obj.total}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>{obj.percentage}</td>
                        </tr>
                    </tbody>
                    
                   </table>
                </div>
                <div className="col-6 ">
                    <div style={{background:`linear-gradient(195deg,white,rgb(150, 232, 255))`,boxShadow:`inset 2px 2px 30px 2px black`,marginLeft:`430px`,boxSizing:`border-box`,padding:30,width:`89%`,borderRadius:`20px`,paddingRight:40}} className="container mt-5 ">
                   


                        {
                            Object.keys(chartOptions)==0?(<div className="fa fa-spinner fa-spin"></div>):(  <div className="mixed-charts"> <Chart options={chartOptions} series={chartOptions.series} type="pie" width={500} /></div>)
                        }
                  

                  
                    
                    </div>
                    
                </div>
            </div>
        )
       }
        </>
    )

}
export default Dashboard