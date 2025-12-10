import React from 'react';
import '../css/Home.css';
import '../css/hero.css'; // Importing hero.css as it might contain relevant styles

function Home() {
  return (
    <div className="home-container">
      <div className="top-div">
        <div className="first-top-div">
          <button className="first-button">🚀 Northern Nigeria's #1 Tech Training Platform</button>
          <h1>Learn Tech Skills That <span>Actually Get You Trained</span></h1>
          <p className="master">Master in-demand skills with expert mentors. Get job-ready in months, not years. Works online and offline.</p>
          <div className="top-first-div">
            <img src="/images/Icon2.png" alt="Icon" /><p>95% job placement rate</p><br />
            <img src="/images/Icon1-2.png" alt="Icon" /><p>Pay as low as ₦15,000/month</p><br />
            <img src="/images/Icon1-1.png" alt="Icon" /><p>Learn anywhere - works without internet</p><br />
          </div>
          <div>
            <button className="get-started">Get Started <img src="/images/Arrow.png" alt="Arrow" /></button>
            <button className="chat-now">Chat Now</button>
          </div>
        </div>
        <div className="second-top-div">
          <img src="/images/Geek.jpg" alt="Geek Cloning" />
          <div className="position">
            <img src="/images/Dot.png" alt="Dot" />
            <p>Live Class in Session</p><br />
            <div className="full-stack">Full Stack Development - 24 students online</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="title">
        <div className="left-title">
          <p className="p1">500+</p>
          <p>Students Hired</p>
        </div>

        <div className="middle-title">
          <p className="p2">95%</p>
          <p>Job Placement</p>
        </div>

        <div className="right-title">
          <p className="p3">₦15k</p>
          <p>Starting Price</p>
        </div>
      </div>

      <div className="head-div">
        <button className="three">🎯 Three Ways to Transform Your Future</button>
        <h1>Choose Your Path to <span className="your-future">Tech Success</span></h1>
        <p>Whether you're a student, school, or business - we have the perfect solution for</p>
        <p className="last">your needs.</p>
      </div>
      <div className="main-div">
        <div className="left-div">
          <div className="first-left-div">
            <div><img src="/images/Education Icons.png" alt="Education" /></div>
            <span>For Students</span>
          </div>
          <h2>Get Hired Fast</h2>
          <h3>Master job-ready skills in 6 months.</h3>
          <p className="expert">Expert mentors. Real projects. Guaranteed results.</p>

          <div className="last-first-div">
            <img src="/images/Icon1-1.png" alt="Icon" /><p>95% job placement rate</p><br />
            <img src="/images/Icon1-2.png" alt="Icon" /><p>Start from ₦15,000/month</p><br />
            <img src="/images/Icon1-1.png" alt="Icon" /><p>6 specialized tracks</p><br />
            <img src="/images/Icon1-2.png" alt="Icon" /><p>1-on-1 mentorship</p><br />
          </div>

          <button>Start Learning <img src="/images/Arrow.png" alt="Arrow" /></button>
        </div>

        <div className="middle-div">
          <div className="first-left-div">
            <div><img src="/images/Icon/Team.svg" alt="Team" /></div>
            <span>For Schools</span>
          </div>
          <h2>Easy Adoption</h2>
          <h3>Transform your students into tech leaders.</h3>
          <p className="expert">Works offline. Proven curriculum. Measurable results.</p>

          <div className="last-first-div">
            <img src="/images/Icon2.png" alt="Icon" /><p>Works without internet</p><br />
            <img src="/images/Icon2.png" alt="Icon" /><p>Ready-to-use curriculum</p><br />
            <img src="/images/Icon2.png" alt="Icon" /><p>Teacher training included</p><br />
            <img src="/images/Icon2.png" alt="Icon" /><p>Student progress tracking</p><br />
          </div>

          <button className="book-demo">Book Demo<img src="/images/Arrow.png" alt="Arrow" /></button>
        </div>

        <div className="right-div">
          <div className="first-left-div">
            <div><img src="/images/Education Icons.png" alt="Education" /></div>
            <span className="for-business">For Business</span>
          </div>
          <h2>Scale & ROI</h2>
          <h3>Upskill your entire workforce.</h3>
          <p className="expert">Plug-and-play solution. Instant deployment. Proven ROI.</p>

          <div className="last-first-div">
            <img src="/images/Icon3.png" alt="Icon" /><p>Deploy in 24 hours</p><br />
            <img src="/images/Icon3.png" alt="Icon" /><p>No internet required</p><br />
            <img src="/images/Icon3.png" alt="Icon" /><p>Custom branding</p><br />
            <img src="/images/Icon3.png" alt="Icon" /><p>24/7 support included</p><br />
          </div>

          <button className="get-quote">Get Qoute<img src="/images/Arrow.png" alt="Arrow" /></button>
        </div>
      </div>

      <div className="enterprise-div">
        <button><img src="/images/Icon/Enterprise.svg" alt="Enterprise" /> Enterprise Solutions</button>
        <h1 className="transform">Transform Your Team with</h1>
        <h1 className="enterprise">Enterprise Learning Solutions</h1>
        <p>Empower your organization with GeekInk's comprehensive B2B learning</p>
        <p>platform. From custom LMS to offline learning solutions, we've got your team covered.</p>
      </div>

      <div className="four-flex-div">
        <div id="main-lms1">
          <div className="lms">
            <div id="lms-icon">
              <img src="/images/Icon/Enterprise.svg" alt="Enterprise" />
            </div>
            <div id="entp">
              <h3>Enterprise LMS</h3>
              <p>Custom learning management system for your organization</p>
            </div>
          </div>

          <div className="box-icon">
            <img src="/images/Check Icons (1).png" alt="Check" /><p>White-label solution</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Custom branding</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Advanced analytics</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Multi-tenant support</p><br />
          </div>
        </div>

        <div id="main-lms2">
          <div className="lms">
            <div id="lms-icon">
              <img src="/images/Icon/Team.svg" alt="Team" />
            </div>
            <div id="entp">
              <h3>Team Training</h3>
              <p>Comprehensive tech training programs for your workforce</p>
            </div>
          </div>

          <div className="box-icon">
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Bulk enrollment</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Progress tracking</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Certification programs</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Flexible scheduling</p><br />
          </div>
        </div>

        <div id="main-lms3">
          <div className="lms">
            <div id="lms-icon">
              <img src="/images/Icon/Custom.svg" alt="Custom" />
            </div>
            <div id="entp">
              <h3>Custom Curriculum</h3>
              <p>Tailored learning paths designed for your industry needs</p>
            </div>
          </div>

          <div className="box-icon">
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Industry-specific content</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Skill assessments</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Learning paths</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Expert mentorship</p><br />
          </div>
        </div>

        <div id="main-lms4">
          <div className="lms">
            <div id="lms-icon">
              <img src="/images/Icon/Offline.svg" alt="Offline" />
            </div>
            <div id="entp">
              <h3>Offline Learning</h3>
              <p>GeekBox ensures learning continues without internet</p>
            </div>
          </div>

          <div className="box-icon">
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Offline content delivery</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Local network</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Hardware included</p><br />
            <img src="/images/Check Icons (1).png" alt="Check" /><p>Technical support</p><br />
          </div>
        </div>
      </div>

      <div className="gradient">
        <img className="ready-icon" src="/images/Icon/Ready.svg" alt="Ready" />
        <h1>Ready to Transform Your Team?</h1>
        <p>Join 2 organizations already using GeekInk to upskill their workforce. Get a personalized demo and see the difference.</p>

        <div>
          <button className="request-demo"><img src="/images/Icon/Request.svg" alt="Request" />Request Demo <img className="black-arrow" src="/images/Icon/Black-Arrow.svg" alt="Arrow" /></button>
          <button className="quote"><img src="/images/Icon/Message.svg" alt="Message" />Get Quote</button>
        </div>

        <p>💬 Connect instantly via WhatsApp • No forms, no waiting</p>
      </div>

      <div className="first-end-div">
        <button id="end-first-button"><img src="/images/Icon/Star.svg" alt="Star" />300+ Students Already</button>
        <h1 id="your-tech">Your Tech Career Starts</h1>
        <h1 id="right-here">Right Here, Right Now</h1>
        <p>Stop waiting. Stop making excuses. Join Northern Nigeria's most successful tech training program.</p>

        <div>
          <div>
            <img src="/images/Icon/Rocket.svg" alt="Rocket" />
            <h3>Get Started</h3>
            <p>Browse courses. Pick your track. Start learning today.</p>
            <button>Browse Courses <img src="/images/Arrow.png" alt="Arrow" /></button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;