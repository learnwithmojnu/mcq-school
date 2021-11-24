import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Questionnaire from '../../../Quiz/Questionnaire';
import Auth from '../../../Auth/useAuth';
import Hero from '../../../Home/Hero';

const SC3 = () => {
    const auth = Auth();
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
    var {displayName, email, photoURL} = user;
    }
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-peak-84384.herokuapp.com/SC3')
            .then(res => res.json())
            .then(data => { setQuestions(data) });
    }, []);

    const handleAnswer = (answer) => {
        if (!showAnswer) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1)
            }
        }
        setShowAnswer(true)
    }

    // Next Question
    const nextQuestion = () => {
        setCurrentIndex(currentIndex + 1)
        setShowAnswer(false);
    }
    const handleSaveScore = () => {
        const newScore = { displayName, email, photoURL, score };
         fetch('https://aqueous-peak-84384.herokuapp.com/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newScore)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        alert('Success, Go to Leaderboard to See Your Score');
    }

    return (
        <div>
        <Hero title="Let's Start Exam 🙋" />
        <div className="quizWrapper">
            {
                auth.user ?
                    <div>
                        {questions.length > 0 ?
                            currentIndex >= questions.length ? (
                                <div>
                                    <h3 className="mb-3"><strong>Game Ended !!! Your Score is:</strong> <span id="scoreBig">{score}</span></h3>
                                    <br/>
                                    <button className="btn btn-secondary" onClick={handleSaveScore}>Save Your Score</button>
                                    <br/>
                                    <br/>
                                    <button className="btn"><a href="/SC3">Restart Quiz</a></button>
                                </div>
                            ) : (<Questionnaire data={questions[currentIndex]} handleAnswer={handleAnswer} showAnswer={showAnswer} nextQuestion={nextQuestion} />
                                ) : (<p className="text-center">Loading...</p>)
                        }
                    </div> :
                    <div>
                        <p>You need to first <span className="text-red"><Link to="/entry">Register/login</Link> </span> </p>
                        <p>Then Start Quiz</p>
                    </div>
            }
        </div>
    </div>
    );
};

export default SC3;