import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoursePage from '../../components/Course/Course';
import Discover from '../../components/Explore/Explore';
import HomePage from '../../components/FirstPage/Homepage';
import MyCourses from '../../components/MyCourses/MyCourses';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <section className='grid-layout'>
        <Sidebar/>
        <div className='grid-b'>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/course" element={<CoursePage/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/mycourses" element={<MyCourses/>}/>
            </Routes>
        </div>
        </section>
    );
};

export default Home;