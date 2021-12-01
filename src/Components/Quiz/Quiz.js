import React, { useState, useEffect } from 'react';
import { WebsiteName } from '../../App';
import { Link } from 'react-router-dom';
import './Quiz.css';
import Hero from '../Home/Hero';
import Questionnaire from './Questionnaire';
import Auth from '../Auth/useAuth';

const Quiz = () => {
    document.title = WebsiteName;
    const auth = Auth();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        var { displayName, email, photoURL } = user;
    }
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-peak-84384.herokuapp.com/questions')
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
        alert('Success, Go to leader board');
    }

    return (
        <>
            <div className="text-center">
                <Hero title="Let's Start Exam" />
            </div>
            <div className="quizWrapper">
                {
                    auth.user ?
                        <div>
                            {questions.length > 0 ?
                                currentIndex >= questions.length ? (
                                    <div>
                                        <h6 className="mb-3"><strong>Game Ended !!! Your Score is:</strong> {score}</h6>
                                        <button className="btn btn-secondary" onClick={handleSaveScore}>Save Your Score</button>
                                        <br />
                                        <br />
                                        <button className="btn"><a href="/quiz">Restart Quiz</a></button>
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
        </>
    )
};

export default Quiz;