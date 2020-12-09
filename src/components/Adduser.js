import React,{useState} from 'react'
import { users } from './UsersRecord'

let Records = JSON.parse(localStorage.getItem('users_record')) || users

function Adduser() {
    const [user, setuser] = useState('');
    const [project, setproject] = useState('');
    const [recs, setrecs] = useState(Records);

    localStorage.setItem('users_record',JSON.stringify(recs))

    const username_change = (e) => {
        setuser(e.target.value)
        e.preventDefault()
    }
    const projectname_change = (e) => {
        setproject(e.target.value)
        e.preventDefault()
    }
    const add_user = () => {
        const new_project = {
            Name : user,
            Project : project
        }
        setrecs(prev => (
            [
                ...prev,
                new_project,
            ]
        ))
    } ;  
    return (
        <div>
            <div>
            <h4>ADD USER</h4>
            <form onSubmit={add_user}>
            <input type="text" placeholder="Enter full name" value={user} onChange={username_change} required />
            <input type="text" placeholder="Enter project name" value={project} onChange={projectname_change} required/>
            <button type="submit">Add User</button>
            </form>
            </div>
            <div id="showUsers">
                {
                    Records.map((person, key) => (
                        <div key={key} className="users">
                            <span>Name : {person["Name"]}</span><br />
                            <span>Project : {person["Project"]}</span><br />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Adduser
