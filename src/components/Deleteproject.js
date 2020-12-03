import React from 'react'

let Records = JSON.parse(localStorage.getItem('users_record'))

function Deleteproject({person}) {
    let index = Records.findIndex(item => item.Name === person);
    // Records.splice(index,1);
    // localStorage.setItem('users_record',JSON.stringify(Records))
    // console.log(index) ;
    return(
        <div className="modal">
            <h4>Name: {Records[index]} </h4>
            <h4>Project:{Records[index]}</h4>
            <button>Delete</button>
        </div>
    )
}

export default Deleteproject