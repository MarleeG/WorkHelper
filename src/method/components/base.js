import React, { Fragment, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./base.css"
import MethodButton from "../../shared/components/UIElement/MethodButton";
import Input from "../../shared/components/UIElement/Input";

// const log = console.log;

const Base = props => {
    const [input, showInputHandler] = useState(false);
    let methodSelected = useRef(null);
    let inputVal = useRef(null);

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

                break;
            case "remove_slashes":
                // remove slashes
                break;
            default: alert("This is not an option");
        }
    }

    function RemoveSpace(input_val) {
        console.log('Remove Space: ', input_val);
        let newStr = [];
        for (let i = 0; i < input_val.length; i++) {
            let current_char = input_val[i];
            let remove_this_char = " ";
            if (current_char === remove_this_char) {
                current_char = "";
            }
            newStr += current_char;
        }

        console.log(`my new string: ${newStr}`)
        return newStr;
    }

    return (
        <Fragment>
            <div className="base-parent">
                <Container className="base text-center" fluid>
                    <Row className="base-row my-4" >
                        <Col lg={12}>
                            <h1>Helper</h1>
                            <hr />
                            <MethodButton
                                updateInputView={showInputHandler}
                                methodChange={updateMethod} />
                        </Col>
                    </Row>

                    {
                        input && (
                            <Row>
                                <Col lg={12}>
                                    <Input getInputVal={myInputVal} />
                                </Col>
                            </Row>
                        )
                    }
                </Container>
            </div>
        </Fragment>
    )
}




export default Base;