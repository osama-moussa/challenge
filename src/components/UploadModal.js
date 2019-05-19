import React, {Component} from 'react';
import { Modal, Button, Form  } from 'react-bootstrap';
class UploadModal extends Component {
  
  constructor(props){
    super(props)
    
  }
    render() { 
        return ( 
            <Modal show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Control type="file" onChange={this.props.onImageChange}/> <br />
              <select>
                  <option name ="square" value="square" >Square</option>
                  <option name="rounded" value="rounded">Rounded</option>
              </select>
            <hr />
            <p>add title to the image</p>
            <Form.Control type="text" placeholder="title" onChange={this.props.handleTitle} />
            <p>change text colour </p>
            <Form.Control type="color" name="TextColor" onChange={this.props.handleTextColor}/>
            <p>change background colour </p>
            <Form.Control type="color" name="Bgcolor"  onChange={this.props.handleBgColor}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleUploadClick}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
         );
    }
}
 
export default UploadModal;