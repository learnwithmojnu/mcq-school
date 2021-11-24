import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from './Hero';

const Home = () => {
    return (
            <div>
                <div>
                    <Hero title="Test Yourself"></Hero>
                </div>
                <div className="mt-5 ml-5">
                    <blockquote>পরীক্ষা দেয়ার জন্য গুগল একাউন্ট দিয়ে সাইন ইন করো। তারপর হোম পেজ থেকে যে অধ্যায়ের পরীক্ষা দিতে চাও, সেই অধ্যায়ে ক্লিক দাও।</blockquote> 
                </div>
                <div className="mt-5 text-center">
                   <div>
                        <h4><NavLink exact to='/quiz'>BCS Live Exam (20)</NavLink></h4>
                   </div>
                   <div>
                        <h4><NavLink exact to='/SC3'>SSC Chemistry Chapter 3 (27)</NavLink></h4>
                   </div>
                   <div>
                        <h4><NavLink exact to='/SC2'>SSC Chemistry Chapter 2 (12)</NavLink></h4>
                   </div>
                </div>
            </div>
    );
};

export default Home;