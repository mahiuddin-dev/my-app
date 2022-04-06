import React from 'react';
import "./style.css";
import Bio from './bio';
import Skills from './skills';
import Links from './links';


class Profile extends React.Component{
    data = {
        name: "Sebastian",
        bio: "lorem"
    }
    listitems = {
        listitems: ["Spring", "Summer", "Fall"]
    };
    social = {
        sociallink:[
            {
                link:'https://google.com',
                name:'Google'
            },
            {
                link:'https://facebook.com',
                name:'Facebook'
            },
            {
                link:'https://twitter.com',
                name:'Twitter'
            },

        ]
    }
    
    render(){
        return(
            <div className="Container">
                <div className="wrap">
                    <Bio name={this.data.name} title='lorem' />
                    <Skills listitems={this.listitems} />
                    <Links social={this.social} />
                </div>
           
            </div>
        )
    }
}

export default Profile;