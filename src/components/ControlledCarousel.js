import React from 'react';
import {Carousel} from 'react-bootstrap'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          style={{backgroundColor: '#d4d4d4', maxWidth: '500px', margin: 'auto'}}
        >
           {this.props.images.length > 0 && this.props.images.map(image => 
            <Carousel.Item>
                <img
                // className="d-block w-100"
                style={{ maxHeight: "600px"}}
                src={image}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
             </Carousel.Item>)
           }
        </Carousel>
      );
    }
  }
export default ControlledCarousel;  