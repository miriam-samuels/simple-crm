import React from 'react'
import Adduser from './Adduser'
import Autosuggest from './Autosuggest'
import Deleteproject from './Deleteproject'

function Crm() {
    return (
        <div >
            <Autosuggest />
            <Adduser />
            <Deleteproject/>
        </div>
    )
}

export default Crm
