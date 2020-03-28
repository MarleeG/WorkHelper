import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./base.css"
import MethodButton from "../../shared/components/UIElement/MethodButton";
import Input from "../../shared/components/UIElement/Input";

const Base = props => {
    const [input, showInputHandler] = useState(false);
    const [method, updateMethodHandler] = useState(null);

    // this.handleClick = val => {
    //     showInputHandler(val)
    // }

    function updateMethod(val){
        console.log(`method: ${val}`)
        updateMethodHandler(val);
    }


    return (
        <Fragment>
            <div className="base-parent">
                <Container className="base text-center" fluid>
                    <Row className="base-row my-4" >
                        <Col lg={12}>
                            <h1>Helper</h1>
                            <hr />
                            <MethodButton updateInput={showInputHandler} methodChange={updateMethod}/>
                        </Col>
                    </Row>

                    {
                        input && (
                            <Row>
                                <Col lg={12}>
                                    <Input />
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