import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './Slider.css'


const items = [
  {
    src: '../img/snpic4.jpeg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: '../img/snpic2.jpeg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: '../img/snpic3.jpeg',
    altText: '',
    caption: '',
    header: ''
  }
];

class Slider extends React.Component {
  render () {
    return (
      <div className="img-container">
        <UncontrolledCarousel items={items} controls={false} indicators={false} />
      </div>
    );
  }
}
export default Slider;
