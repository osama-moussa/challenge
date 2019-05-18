import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import AddButton from '../components/AddButton';
import UploadModal from '../components/UploadModal';
import ControlledCarousel from '../components/ControlledCarousel';

class HomePage extends Component {
    state = {
        show: false,
        images: []
    };

    handleClose = () =>  this.setState({ show: false });
    
    handleShow = () => this.setState({ show: true });

    handleUploadClick = () => {
        console.log('uploading');
        // logic for the upload click;
        localStorage.setItem('name', "ahmed menaem");
        this.setState({ show: false });
    };

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            images: [...this.state.images, URL.createObjectURL(event.target.files[0])]
          });
        }
       }

    render() { 
        return ( 
            <Container>
                <h1>Challenge</h1>
                <hr />
                <ControlledCarousel 
                    images={this.state.images}
                />
                <AddButton handleClick={this.handleShow} />
                {/* <input type="color" />
                <input type="file" /> */}
                <UploadModal
                    onImageChange={this.onImageChange}
                    show={this.state.show} 
                    handleClose={this.handleClose} 
                    handleUploadClick={this.handleUploadClick}
                />
            </Container>
         );
    }
}
 
export default HomePage;