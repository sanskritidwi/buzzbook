import { React, useState } from "react";

function Employee() {

    const [newEmployee, setEmployee] = useState({
        ename: "",
        email: "",
        emobile: ""
    })


    const [records, setRecords] = useState([])

    const handleInput = (e) => {


        const name = e.target.name;
        const value = e.target.value;
        //console.log(name, value)

        setEmployee({ ...newEmployee, [name]: value });
    }
    const handleSubmit = (e) => {
        console.log('handlesubmit ran');
        e.preventDefault();

        const newRecord = { ...newEmployee, id: new Date().getTime().toString() }
        console.log(records)

        setRecords([...records, newRecord]);
        console.log(newRecord);

        setEmployee({ ename: "", email: "", emobile: "" });

    }


    const deleteItem=(id)=>{
        const updatedEmployees = records.filter((curEle,ind)=>{
return ind !== id;
        })

        setRecords(updatedEmployees)
    }

    return (
        <>
            <div className="e-form">

                <form className="form-input" action='' onSubmit={handleSubmit}>
                    <div className="form-title"><p>Employee List</p></div>
                    <div style={{ padding: '8px 25px 25px 25px' }}>
                        <div className="di-fl-co">
                            <label htmlFor="ename">Name*</label>
                            <input type='text' name="ename" autoComplete="off" placeholder='eg, John Doe' value={Employee.ename} onChange={handleInput} required></input>
                        </div>
                        <div className="di-fl-co">
                            <label htmlFor="email">Email*</label>
                            <input type='email' name="email" autoComplete="off" placeholder='eg, john@email.com' className="inputs" value={Employee.email} onChange={handleInput} required></input>
                        </div>
                        <div className="di-fl-co">
                            <label htmlFor="emobile">Mobile*</label>
                            <input type='text' name='emobile' autoComplete="off" placeholder='XXX-XXXX-XXX' className="inputs" value={Employee.emobile} onChange={handleInput} required></input>
                        </div>

                        <button type="submit">ADD</button>
                    </div>
                </form>
                

                <div style={{ height: '220px', width: '100%', overflowY: 'scroll' }} id="style-7" className="scrollbar">

                    {
                        records.map((curEle,ind) => {
                            return (
                                <>
                                    <div className="form-output">
                                        <div className="di-fl-ro" key={curEle.id}>
                                            <div className="di-fl-co">
                                                <p className="grey-p">Name</p>
                                                <p className="purple-p">{curEle.ename}</p>
                                            </div>
                                            <div className="di-fl-co" style={{ marginLeft: '50px' }}>
                                                <p className="grey-p">Mobile</p>
                                                <p className="purple-p">{curEle.emobile}</p>
                                            </div>
                                        </div>
                                        <div className="di-fl-ro" style={{ alignItems: 'center', marginTop: '10px' , flexWrap:'wrap'}}>
                                            <div className="di-fl-co">
                                                <p className="grey-p">Email</p>
                                                <p className="purple-p">{curEle.email}</p>
                                            </div>
                                            <button type='submit'
                                                style={{ marginLeft: 'auto', marginRight: '12px' }}
                                                onClick={()=>deleteItem(ind)}
                                            >Delete</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default Employee;