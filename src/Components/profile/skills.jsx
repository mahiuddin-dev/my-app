import React from 'react';

const Skills = (props) => (
    <div className="Skills">
        <h3>Skills:</h3>
        <ul>
            {props.listitems.listitems.map(listitem => (
            <li> {listitem} </li>
            ))}
        </ul>
    </div>
)


export default Skills;