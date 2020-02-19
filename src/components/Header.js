import React from 'react';
import { Link } from 'react-router-dom';

const Header =() =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Link to="/" className="list">Streamer</Link>
                </div>
                <div className="col-md-6">
                    <Link to="/" className="list"> All Streams</Link>
                </div>

            </div>
        </div>
    )
};


export default Header;