import React from 'react';
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>
            
            <div className="body_info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/SoUOqL281Xhvnx68H-MJlZJ2pwEVBH1UjSEsHN5AF0Bgt5p5DcT3CzSrW82JRxskhwesntei0fQxTyV3UYEY36ntwObzokK7jMwat5XPKaY=/NzI6MTI6MjJUNjItODAtMQ==" 
                     alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p>     
                </div>
        </div>
        </div>
    );
}

export default Body;
