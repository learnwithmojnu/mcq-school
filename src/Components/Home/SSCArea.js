import React from 'react';
import './SSCArea.css';

const SSCArea = () => {
    return (
        <div className="container sscArea">
            <h2>SSC</h2>
            <div className="subject-chemistry">
                <h3>Chemistry</h3>
                <div className="row">
                    <div className="col-md-4">
                        <a  href="/SC1">Chapter 1 - Concepts of Chemistry</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/SC2">Chapter 2 - States of Matter</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/SC3">Chapter 3 - Structure of Matter</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="/SC4">Chapter 4 - Periodic Table</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/SC5">Chapter 5 - Chemical Bond</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/SC6">Chapter 6 - Concept of Mole and Chemical Counting</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSCArea;