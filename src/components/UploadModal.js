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
                  <option value="square">Square</option>
                  <option value="rounded">Rounded</option>
              </select>
            <Form.Control type="number" placeholder="width" />
            <hr />
            <Form.Control type="text" placeholder="title" onChange={this.props.handleTitle} />
            <Form.Control type="color" />
            <Form.Control type="color" />
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