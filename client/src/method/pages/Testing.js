import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

const Testing = props => {
  return (
    <Fragment>
      {/* <input
    type="file"
    webkitdirectory="true"
    mozdirectory="true"
    directory="true"
  /> */}
      <div className="mx-auto justify-content-center">
        <h1 className="text-center">Folder uploader</h1>

        <Form>
          <Form.Group controlId="formFolderUpload">
            <Form.Label>Folder</Form.Label>
            <Form.Control
              type="file"
              webkitdirectory="true"
              mozdirectory="true"
              directory="true"
            />
            <Form.Text className="text-muted">Upload a folder</Form.Text>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default Testing;
