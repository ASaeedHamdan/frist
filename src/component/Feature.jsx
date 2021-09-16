import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Features() {
    return (
        <div id='features'>
            <div className='a-container lin'>
            <FeatureBox  image={featureimage1} title='hello saeed'/>
            <FeatureBox  image={featureimage2} title='hello saeed'/>
            <FeatureBox  image={featureimage3} title='hello saeed'/>
            </div>
            <a href='#' className='cv-btn2'>اضافة فيديو </a>
        </div>
    )
}

export default Features;
