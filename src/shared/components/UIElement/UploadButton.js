import React, { Fragment } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import "./UploadButton.css";

const UploadButton = props => {
  return (
    <Fragment>
      <div className="mt-5 upload-button-container mx-auto d-flex justify-content-center">
        {/* <Button variant="dark" size="lg">
          Upload Folder{"  "}
          <i className="folder outline icon"></i>
        </Button> */}

        {/* <input type="file" webkitdirectory="true" mozdirectory="true" directory="true" /> */}

        {/* Testing Webkit */}
        <Form
          style={{ width: "50%" }}
          className="d-flex justify-content-center"
        >
          <Form.Group controlId="formFolderUpload">
            <Form.Label>Folder</Form.Label>
            <Form.Control
              type="file"
              webkitdirectory="true"
              mozdirectory="true"
              directory="true"
              // multiple={false}
              onChange={e => props.handleFolderUpload(e)}
            />
            <Form.Text className="text-muted">Upload a folder</Form.Text>
          </Form.Group>
        </Form>
      </div>

      <hr />
      <Container className="my-3">
        <Row className="Row">
          <Col>
            <h3>This is my UL</h3>
            <ul id="listing"></ul>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UploadButton;
