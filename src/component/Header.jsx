import React from 'react';
import Navbar from './Navbar';
import FeatureBox from './FeatureBox';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1><span>اهلا وسهلا <br/></span> يسعدنا ويشرفنا وجودكم لدينا</h1>
        <p className='details'>
        نتمني لكم قضاء وقت ممتع لدينا
        </p>
        <a href='#' className='cv-btn'>فيديوهاتي</a>
      </div>
    </div>
  )
}

export default Header



























