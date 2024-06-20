import React from 'react';
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import AboutLink from "../components/AboutLink";


const Home = () => {
    const title = "Welcome to the Feedback App";
    const subTitle = "Provide your feedback below";
    const bgColor = "lightPink";
    const textColor = "red";

    return (
        <div>
            <Header title={title} bgColor={bgColor} textColor={textColor} />
            <SubHeader subTitle={subTitle} />
            <div className="container">
                <h1>Feedback App</h1>
                <AboutLink />
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList /> 
                <AboutLink /> 
            </div>
        </div>
    )
}

export default Home