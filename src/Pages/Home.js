import React from 'react';
import Welcome from './component/image/Welcome.gif'
import '../App.css';

function Home() {
        return (
            <div className = "center">
                <img  src={Welcome} alt="Welcome" />
            </div>
        );
}
export default Home;