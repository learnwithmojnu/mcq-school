import React, { useEffect, useState } from 'react';
import EverySingleScore from '../EverySingleScore/EverySingleScore';

const LeaderBoard = () => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-peak-84384.herokuapp.com/scores')
        .then(res => res.json())
        .then(data => setScores(data))
    }, [])
    return (
        <div className="row">
            {
                scores.map(perScore => <EverySingleScore perScore={perScore}></EverySingleScore>)
            }
        </div>
    );
};

export default LeaderBoard;