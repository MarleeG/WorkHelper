import React, { Fragment, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./base.css";
import MethodButton from "../../shared/components/UIElement/MethodButton";
import Input from "../../shared/components/UIElement/Input";
import MyTextArea from "../../shared/components/UIElement/MyTextArea";
import UploadButton from "../../shared/components/UIElement/UploadButton";

// const log = console.log;

const Base = props => {
  const [input, showInputHandler] = useState(false);
  const [showTextArea, showTextAreaHandler] = useState(false);
  //   this will keep track of the placeholder shown in the textarea
  const [placeholderText, updatePlaceholderText] = useState(null);

  //   this will handle the UploadButton component
  const [showUploadButton, showUploadButtonHandler] = useState(false);

  let methodSelected = useRef(null);
  let inputVal = useRef(null);
  let newVal = useRef(null);

  // This option updates which method was selected and assigns it to methodSelected
  function updateMethod(method_selected) {
    methodSelected.current = method_selected;
  }

  function myInputVal(my_input_val) {
    inputVal.current = my_input_val;

    switch (methodSelected.current) {
      case "remove_space":
        // This function will remove the spaces in my string
        RemoveSpace(inputVal.current);
        break;
      case "remove_new_line_char":
        // remove new line character
        RemoveNewLineChar(inputVal.current);
        break;
      case "remove_slashes":
        // remove slashes
        RemoveSlashes();
        break;
      default:
        alert("This is not an option");
    }
  }

  function RemoveSlashes() {
    showTextAreaHandler(false);
  }

  function RemoveNewLineChar(myString) {
    // showUploadButtonHandler(false);
    let newStr = [];

    for (let i = 0; i < myString.length; i++) {
      let current_char = myString[i];

      let remove_this_char = "\n";

      if (current_char === remove_this_char) {
        current_char = "";
      }

      newStr += current_char;
    }

    newVal.current = newStr;
    showTextAreaHandler(true);
  }

  function RemoveSpace(input_val) {
    // showUploadButtonHandler(false);

    let newStr = [];

    for (let i = 0; i < input_val.length; i++) {
      let current_char = input_val[i];
      let remove_this_char = " ";
      if (current_char === remove_this_char) {
        current_char = "";
      }
      newStr += current_char;
    }

    newVal.current = newStr;
    showTextAreaHandler(true);
  }

  function handleFolderUpload(event) {
    let output = document.getElementById("listing");
    let files = event.target.files;

    // console.log(files);
    // console.log(typeof(files));
    // files = files.filter(fle => fle.name[0] !== ".");
    // console.log(files.name);

    for (let i = 0; i < files.length; i++) {
      let item = document.createElement("li");
      if (files[i].name[0] !== ".") {
        // item.innerHTML = files[i].webkitRelativePath;
        item.innerHTML = files[i].name;
        console.log(files[i]);
        output.appendChild(item);
      }
    }
  }

  return (
    <Fragment>
      <div className="base-parent">
        <Container className="base text-center" fluid>
          <Row className="base-row my-4">
            <Col lg={12}>
              <h1>Helper</h1>
              <hr />
              <MethodButton
                updateInputView={showInputHandler}
                methodChange={updateMethod}
                plcHolder={updatePlaceholderText}
                showUploadButtonHandler={showUploadButtonHandler}
              />
            </Col>
          </Row>

          {input && (
            <Row>
              <Col lg={12}>
                <Input getInputVal={myInputVal} pH={placeholderText} />
              </Col>
            </Row>
          )}

          {showTextArea && (
            <Row className="mt-5">
              <Col lg={12}>
                <MyTextArea myNewVal={newVal.current} />
              </Col>
            </Row>
          )}

          {showUploadButton && (
            <Row className="mt-5">
              <Col lg={12}>
                <UploadButton handleFolderUpload={handleFolderUpload} />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default Base;
