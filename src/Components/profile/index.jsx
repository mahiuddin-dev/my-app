import React from 'react';
import "./style.css";
import Bio from './bio';
import Skills from './skills';
import Links from './links';



class Profile extends React.Component{
    render(){
        return(
            <div className="Container">
                <div className="wrap">
                    <Bio name='manik' bio='lorem' />
                    <Skills/>
                    <Links/>
                </div>
                <div className="wrap">
                    <Bio name='Mahiuddin' bio='lorem' />
                    <Skills/>
                    <Links/>
                </div>
           
            </div>
        )
    }
}

export default Profile;