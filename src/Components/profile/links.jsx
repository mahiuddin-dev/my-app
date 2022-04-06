import React from 'react';

const Links = (props) => (
    <div className="Links">
        <h3>Social Links:</h3>
        <ul>
            {props.social.sociallink.map(link => (
                <li> <a href={link.link}>{link.name}</a> </li>
            ))}
        </ul>
    </div>
)

export default Links;