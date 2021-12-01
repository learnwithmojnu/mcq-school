import React, { useEffect, useState } from 'react';
import ProfileScore from './ProfileScore/ProfileScore';

const Score = () => {
    const [scores, setScores] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')) || '';
    useEffect(() => {
         fetch('https://aqueous-peak-84384.herokuapp.com/selfScores?email='+ user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
         })
            .then(res => res.json())
            .then(data => setScores(data))
    }, [user.email])
    return (
        <div>
            <div className="row">
            {
                scores.map(score => <ProfileScore score={score}></ProfileScore>)
            }
        </div>
        </div>
    );
};

export default Score;