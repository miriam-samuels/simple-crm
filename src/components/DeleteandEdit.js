import React, { useState, useRef } from 'react'
let Records = JSON.parse(localStorage.getItem('users_record'))

function DeleteandEdit({ user, reveal, reset_user }) {
    const show = useRef()
    const [edit_show, setedit_show] = useState(false)
    const [delete_show, setdelete_show] = useState(false)

    let index = Records.findIndex(item => user === item.Name);
    if (index < 0) {
        index = Records.findIndex(item => user === item.Project);
    }
    const reset_show = () => {
        show.current.style.display = "none";
        reset_user()
    }

    if (index >= 0) {
        return (
            <div>
                <div className="modal" style={reveal} ref={show} >
                    <div className="modal-content">
                        <button className="cancel-modal" onClick={reset_show} >X</button>
                        <h4>Name: {Records[index]["Name"]} </h4>
                        <h4>Project: {Records[index]["Project"]}</h4>
                        <button className="edit-project" onClick={() => setedit_show(true)}>Edit</button>
                        <button type="submit" className="delete-project" onClick={() => setdelete_show(true)}>Delete</button>
                    </div>
                </div>
                <Edits user = {user} edit_show = {edit_show} reset_show={reset_show}/>
                <Deleted user = {user} delete_show = {delete_show} reset_show={reset_show}/>
            </div>
        )
    }
    else {
        return null
    }
}

export default DeleteandEdit
function Edits({user,edit_show,reset_show}){
    const show = useRef()
    let index = Records.findIndex(item => user === item.Name);
    if (index < 0) {
        index = Records.findIndex(item => user === item.Project);
    }
    const [fullname, setfullname] = useState(Records[index]["Name"]);
    const [projectname, setprojectname] = useState(Records[index]["Project"])


    const name_change = (e) => {
        setfullname(e.target.value)
    }
    const projectname_change = (e) => {
        setprojectname(e.target.value)
    }
    const replace = () => {
        const updated = {
            Name: fullname,
            Project: projectname,
        }
        Records.splice(index, 1, updated)
        localStorage.setItem('users_record', JSON.stringify(Records))
    }
    const styles = {
        display : edit_show ? "block" : "none" ,
    }
    return (
        <div className="edit modal" style = {styles}>
        <form className="modal-content">
            <button className="cancel-modal" ref={show} onClick={reset_show}>X</button>
            <input type="text" placeholder="Enter full name" value={fullname} onChange={name_change} />
            <input type="text" placeholder="Enter project name" value={projectname} onChange={projectname_change} />
            <button type="submit" onClick={replace}>Update</button>
        </form>
        </div>
    )
}

function Deleted({user,delete_show,reset_show}) {
    const show = useRef()
    let index = Records.findIndex(item => user === item.Name);
    if (index < 0) {
        index = Records.findIndex(item => user === item.Project);
    }
    const deletes = () => {
        Records.splice(index, 1);
        localStorage.setItem('users_record', JSON.stringify(Records))
    }
    const styles = {
        display : delete_show ? "block" : "none" ,
    }
    return(
        <div className="edit modal" style={styles}>
        <form className="modal-content">
            <h4>Are you sure you want to delete</h4>
            <button type="submit" onClick ={deletes}>Yes</button>
            <button onClick={reset_show} ref={show}>No</button>
        </form>
        </div>
    )
}