import React from "react";
import "../../css/career.css";
import{ FaRocket } from 'react-icons/fa';
 


export default function Career() {
  return (
    <div className="career-container">
      <div className="header-section">
        <h1>Your Tech Career Starts</h1>
        <h2 className="header-section2">Right Here, Right Now</h2>
      </div>
      
      <h2 className="subtitle">Stop waiting. Stop making excuses. Join Northern Nigeria's most successful tech training program</h2>
      
      <div className="container">
        <div className="card">
          <div className="icon">
            <FaRocket size={70} color="blue" />  
          </div>
          <div className="card-content">
            <h1>Get Started</h1>
            <h2>Browse courses, pick your track, start learning today</h2>
            <div className="btn">
              <button className="btn_a">Browse courses</button>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card_y">
          <img src="../../../../public/images/message.svg" alt="" />
            <div className="card-content">
              <h1>Chat Now</h1>
              <h2>Get instant answers, discuss payment plans. Start immediately</h2>
            </div>
          </div>
          <div className="btn">
            <button className="btn_b">Whatsapp Us</button>
          </div>
        </div>
        
        <div className="card">
           <img src="../../../../public/images/user1.svg" alt="" />
          <div className="card-content">
            <h1>Join Now</h1>
            <h2>Apply today, secure your spot, transform your future</h2>
            <div className="btn">
              <button className="btn_c">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container_a">
        <div className="card_x">
         
          <div className="card-content">
            <h1>Don't wait another day</h1>
            <h2>Every day you wait is another day your competition gets ahead. Start Now</h2>
            <div className="btn">
              <button className="btn_d">Start Now</button>
              <button className="btn_e">View Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}