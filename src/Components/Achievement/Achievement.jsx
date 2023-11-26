import React from 'react';
import './Achievement.css';
import Problem_solving from '../../img/Problem_sol_badge.png';
import CBadge from '../../img/c++_badge.png';
import Java_Badge from '../../img/java_badge.png';
import Leetcode from '../../img/leetcode.png';


const Achievement = () => {
  return (
    <div style={{width:'100%', height:'100vh'}} className='myachievement' >
      <h1>My Achievements</h1>
      {/* for problem solving */}
      <div className="achievement">
        <div className="circle"></div>
          <img style={{width: '100%', marginTop: '200px'}} src={Problem_solving} alt="Problem Solving Badge" />
          <span>3 star</span>
          <span>Hackerrank</span>
        
      </div>
      {/* for c++ */}
      <div className="achievement">
        <div className="circle"> </div>

          <img style={{width: '90%', marginTop: '200px'}}  src={CBadge} alt="C++ Badge" />
          <span>4 star</span>
          <span>Hackerrank</span>
        
      </div>

      <div className="achievement">
        <div className="circle"></div>
       
          <img style={{width: '90%', marginTop: '200px'}}  src={Java_Badge} alt="Java Badge" />
          <span>3 star</span>
          <span>Hackerrank</span>
        
      </div>

      <div className="achievement">
        <div className="circle"> </div>

          <img style={{width: '90%', marginTop: '200px'}}  src={Leetcode} alt="Leetcode Badge" />
          <span>Solved 50+ Problems</span>
          <span>Leetcode</span>
       
      </div>
      <div>
       
      </div>
      
    </div>
  );
};

export default Achievement;
