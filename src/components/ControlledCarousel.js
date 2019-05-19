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
          style={{backgroundColor:"#4edff", maxWidth:"500px", margin: 'auto'}}
        >
           {this.props.images.length > 0 && this.props.images.map(image => 
            <Carousel.Item>
                <img
                
                style={{ maxHeight: "600px"}}
                src={image}
                alt="First slide"
                />
                <Carousel.Caption>
                    
                    <p name="title" style={{color:this.props.TextColor,backgroundColor:this.props.Bgcolor}}>{this.props.title}</p>
                </Carousel.Caption>
             </Carousel.Item>)
           }
        </Carousel>
      );
    }
  }
export default ControlledCarousel;