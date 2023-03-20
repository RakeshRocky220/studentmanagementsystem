import axios from "axios";
import $ from 'jquery'
import { useState } from "react";
import '../Styles/GetStudent.css'
const GetStudent = () => {

  const [id, setId] = useState(0)
  const [name, setName] = useState("");
  const [corse, setCorse] = useState("");
  const [fe, setFe] = useState(0.0);
  const [s, setS] = useState(0.0);
  const [p, setP] = useState(0.0);
  const [q, setQ] = useState(0.0);
  const [bool, setBool] = useState(false)
  const [bool1, setBool1] = useState(false)
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState([]);

  const func_one = (p) => {
    setFlag(true)
    const t1 = res.filter(i => i.sid == p)
    const t2 = t1[0]
    const { sid, sname, course, fee, s1, s2, s3 } = t2
    setId(sid)
    setFe(fee)
    setCorse(course)
    setName(sname)
    setS(s1)
    setP(s2)
    setQ(s3)


    $('#exampleModal').modal('show');
  }
  const update = (p) => {
    axios.put(`http://localhost:2022/update/${p}`, {
      "sid": p,
      "sname": name,
      "fee": fe,
      "course": corse,
      "s1": s,
      "s2": p,
      "s3": q
    }).then((p) => {
      const { data } = p
      res.map((e, i) => {
        if (e.sid == data.sid) {
          res[i] = data
          setRes(res)
          func()
          setBool(true)
          setTimeout(() => {
            setBool(false)
          }, 3000)
        }
      })
    }, (event) => {
      console.log(event)
    })
  }
  const func_two = (p) => {
    axios.delete(`http://localhost:2022/delete/${p}`).then((pos) => {
      func()
      setBool1(true)
      setTimeout(() => {
        setBool1(false)
      }, 3000)
    }, (err) => {
      console.log(err)
    })
  }
  const func = () => {
    axios.get("http://localhost:2022/getAll").then(
      (p) => {
        const { data } = p;
        setRes(data);

      },
      (event) => {
        console.log(event);
      }
    );
  };

  return (
    <>
      <div style={{ margin: `25px` }} className="row ">
        <div className="col-3"></div>
        <div className="col-6">
          <button onClick={func} className="btn btn-outline-primary m-3">
            GetStudents
          </button>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container">
            {
              bool ? <div className='alert alert-success alert-dismissible' role="alert"><strong>Student Updated</strong><button type={"button"} className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button></div> : ''
            }
            {
              bool1 ? <div className='alert alert-danger alert-dismissible' role="alert"><strong>Student deleted</strong><button type={"button"} className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button></div> : ''

            }
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          {res.length == 0 ? (
            flag ? (
              <div
                style={{
                  color: `green`,
                  fontSize: `30px`,
                  fontWeight: `bold`,
                  position: `absolute`,
                  top: `47%`,
                  left: `65%`,
                }}
                className="fa fa-spinner fa-spin"
              ></div>
            ) : (
              <div></div>
            )
          ) : (
            <div className="container">
              <div className="row ">
                <div className="col-sm-12">
                  <div style={{ overflowX: 'auto', maxHeight: `400px` }} >
                    <table style={{ borderRadius: "25px" }} className="table table-dark table-bordered table-striped table-hover ">
                      <thead style={{ position: `sticky`, top: `0` }}>
                        <tr style={{ textAlign: `center` }}>
                          <th>sid</th>
                          <th>sname</th>
                          <th>course</th>
                          <th>fee</th>
                          <th>Maths</th>
                          <th>physics</th>
                          <th>chemistry</th>
                          <th>total</th>
                          <th>percentage</th>
                          <th>grade</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {res.map((e, i) => {
                          return (
                            <tr key={e.eid}>
                              <td>{e.sid}</td>
                              <td>{e.sname}</td>
                              <td>{e.course}</td>
                              <td>{e.fee}</td>
                              <td>{e.s1}</td>
                              <td>{e.s2}</td>
                              <td>{e.s3}</td>
                              <td>{e.total}</td>
                              <td>{e.percentage}</td>
                              <td>{e.grade}</td>
                              <td>
                                <i style={{ color: `green` }} className="fa fa-edit" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"} onClick={() => func_one(e.sid)}></i>
                              </td>
                              <td>
                                <i style={{ color: `red` }} className="fa fa-trash" onClick={() => func_two(e.sid)}></i>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: `flex`, justifyContent: `center` }} className="modal fade" id="exampleModal" tabIndex={"-1"}  >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Student Here</h1>
              <button type={"button"} className="btn-close" data-bs-dismiss="modal" aria-label={"Close"}></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type={"text"} value={name} className="form-control" onChange={(event) => setName(event.target.value)} placeholder="Enter student Name"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Course</label>
                    <input type={"text"} value={corse} className="form-control" onChange={(event) => setCorse(event.target.value)} placeholder="Enter student course"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Physics</label>
                    <input type={"number"} value={p} className="form-control" onChange={(event) => setP(event.target.value)} placeholder="Enter Physics Marks"></input>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label">Fee</label>
                    <input type={"number"} value={fe} onChange={(event) => setFe(event.target.value)} className="form-control" placeholder="Enter student fee"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Maths</label>
                    <input type={"number"} value={s} onChange={(event) => setS(event.target.value)} className="form-control" placeholder="Enter Maths Marks"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Chemistry</label>
                    <input type={"number"} value={q} onChange={(event) => setQ(event.target.value)} className="form-control" placeholder="Enter Chemistry Marks"></input>
                  </div>
                </div>
              </div>.
            </div>
            <div className="modal-footer">
              <button type={"button"} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="update" type={"button"} onClick={() => update(id)} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>





  );
};
export default GetStudent;
