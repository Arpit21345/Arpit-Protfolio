import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/arpit-pandey-529406220/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://leetcode.com/u/Arpit21345/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-brackets-curly"></i> {/* Placeholder for LeetCode */}
      </a>
      <a href="https://www.naukri.com/code360/profile/42966f53-8d23-462e-8535-22f54a78d0e0" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-ninja"></i> 
      </a>
      <a href="https://github.com/Arpit21345" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
