import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import AddButton from '../components/AddButton';
import UploadModal from '../components/UploadModal';
import ControlledCarousel from '../components/ControlledCarousel';

class HomePage extends Component {
    state = {
        show: false,
        images: [],
        title:"",
        Bgcolor:"",
        TextColor:"",
    };

    handleClose = () =>  this.setState({ show: false });
    
    handleShow = () => this.setState({ show: true });

    handleUploadClick = () => {
        this.setState({ show: false });
    };

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            images: [...this.state.images, URL.createObjectURL(event.target.files[0])]
          });
        }
       }
       handleTitle = event => {
        this.setState({title: event.target.value})
      }
      handleBgColor = event =>{
          this.setState({Bgcolor:event.target.value})
      }
     handleTextColor = event =>{
         this.setState({TextColor:event.target.value})
         
     }
    
  
    

    render() { 
        return ( 
            <Container>
                <h1>Challenge</h1>
                <hr />
                <ControlledCarousel 
                    images={this.state.images}
                    title={this.state.title}
                    TextColor={this.state.TextColor}
                    Bgcolor={this.state.Bgcolor}
                
                />
                <AddButton handleClick={this.handleShow} />
                <UploadModal
                    onImageChange={this.onImageChange}
                    show={this.state.show} 
                    handleClose={this.handleClose} 
                    handleUploadClick={this.handleUploadClick}
                    handleTitle={this.handleTitle}
                    handleColor={this.handleBgColor}
                    handleTextColor={this.handleTextColor}
                    handleBgColor={this.handleBgColor}
                   
                />
            </Container>
         );
    }
}
 
export default HomePage;