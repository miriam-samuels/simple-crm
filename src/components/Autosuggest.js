import React, { useState } from 'react'
import Rendersuggestion from './Rendersuggestion';
import { users } from './UsersRecord'
import DeleteandEdit from './DeleteandEdit';

let Records = JSON.parse(localStorage.getItem('users_record')) || users

function Autosuggest() {
    var [suggestions, setsuggestions] = useState([])
    const [user, setuser] = useState('');
    const [search, setsearch] = useState('Search By');
    const [show, setshow] = useState(false)
    const reveal = {
        display: show? "block" : "none",
    }
    const names = Records.map(name => (
        name["Name"]
    ))
    const projects = Records.map(project => (
        project["Project"]
    ))

    const searchOption = (e) => {
        const val = e.currentTarget.value
        setsearch(val);
    }

    const select = (e) => {
        const value = e.target.value
        const searcherror = document.getElementById("errormsg");
        let suggestions = []
        const regexp = new RegExp(`${value}`,'i');
        if (value.length > 0) {
            if (search === "Search By") {
                searcherror.innerHTML = "pick a search option"
            }
            else if (search === "User") {
                suggestions = names.sort().filter(name => regexp.test(name));
                searcherror.innerHTML = ""
            }
            else if (search === "Project") {
                suggestions = projects.sort().filter(project => regexp.test(project));
                searcherror.innerHTML = ""
            }
        }
        setsuggestions(suggestions)
        setuser(value);
    }

    const choice = (e) => {
        setuser(e);
    }
    const get_project = () => {
        setshow(true)
    }
    const reset_user = () => {
        setuser("");
        setsuggestions([])
    }
    return (
        <div>
            <input type="text" onChange={select} value={user} className="input" placeholder="Search...." />
            <button onClick= {get_project} className="enter-btn">GO</button>
            <select onChange={searchOption} value={search}>
                <option>Search By</option>
                <option>User</option>
                <option>Project</option>
            </select>
            <p id="errormsg"></p>
            <Rendersuggestion suggestions = {suggestions} choice = {choice}/>
            <span>Suggestions : {suggestions.length}</span>
            <DeleteandEdit user = {user} reveal = {reveal} reset_user = {reset_user}/>
        </div>
    )
}

export default Autosuggest