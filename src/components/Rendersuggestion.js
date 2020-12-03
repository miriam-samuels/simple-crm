import React from 'react'

function Rendersuggestion({suggestions,choice}) {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <>
            <ul>
                {
                    suggestions.map((person, index) => (
                        <li key={index} onClick={() => choice(person)} >{person}</li>
                    ))
                }
            </ul>
            </>
        )

}

export default Rendersuggestion
