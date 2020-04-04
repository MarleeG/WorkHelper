import React, { Fragment, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import "./UploadButton.css";

const UploadButton = (props) => {
  const log = console.log;
  const [showDwnBtn, handleShowDwnBtn] = useState(false);
  const [fileContent, updateFileContent] = useState([]);

  function createDownloadableFolder(files) {
    handleShowDwnBtn(true);
    log(fileContent);


    handleShowDwnBtn(true);
    for (let a = 0; a < files.length; a++) {
      // ORIGNAL
      // placeFileContent(
      //   document.getElementById("content-target"),
      //   files[a],
      //   files[a].name
      // );

      placeFileContent(
        files[a],
        files[a].name
      );
    }

    for (let x = 0; x < files.length; x++) {
      let { name, type } = files[x];

      // var element = document.createElement("a");
      // element.setAttribute(
      //   "href",
      //   `data:${type};charset=utf-8,` + encodeURIComponent(text)
      // );
      // element.setAttribute("download", name);

      // element.style.display = "none";
      // document.body.appendChild(element);

      // element.click();

      // document.body.removeChild(element);
    }
  }

  function handleFolderUpload(event) {
    // console.log(event.target.files);
    let output = document.getElementById("listing");
    // output.setAttribute("style", "visibility: none");
    let files = event.target.files;

    let userFiles = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].name[0] !== ".") {
        userFiles.push(files[i]);
      }
    }

    files = userFiles;

    // console.log(userFiles);

    for (let i = 0; i < files.length; i++) {
      let item = document.createElement("li");
      if (files[i].name[0] !== ".") {
        // item.innerHTML = files[i].webkitRelativePath;
        item.innerHTML = files[i].name;
        // console.log(files[i]);
        output.appendChild(item);
      }
    }

    createDownloadableFolder(files);
  }

  // ORIGINAL               target, file, name
  function placeFileContent(file, name) {
    // ORIGINAL
    // readFileContent(file)
    //   .then((content) => {
    //     log(`${name} ::: `, content); 
    //     target.value = content;
    //   })
    //   .catch((error) => console.log(error));

      readFileContent(file)
      .then((content) => {
        // log(`${name} ::: `, content);
        // updateFileContent = [content ,...fileContent];
        updateFileContent.push(content);
      })
      .catch((error) => console.log(error));
  }

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

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
          <Form.Group>
            {/* controlId="formFolderUpload" */}
            <Form.Label>Folder</Form.Label>
            <Form.Control
              type="file"
              webkitdirectory="true"
              mozdirectory="true"
              directory="true"
              // multiple={false}
              id="input-file"
              onChange={(e) => handleFolderUpload(e)}
            />
            <Form.Text className="text-muted">Upload a folder</Form.Text>
          </Form.Group>
        </Form>
      </div>

      <hr className="my-3" />
      <Container className="my-5">
        <Row>
          <Col>
            <h3>This is my UL</h3>
            <ul id="listing"></ul>
          </Col>
        </Row>
      </Container>

      {showDwnBtn && (
        <Container className="my-4">
          <Row>
            <Col>
              <Button variant="danger" size="lg">
                Download Updated Files
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default UploadButton;
