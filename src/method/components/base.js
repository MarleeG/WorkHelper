import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./base.css"
import MethodButton from "../../shared/components/UIElement/MethodButton";
import Input from "../../shared/components/UIElement/Input";

const Base = props => {
    const [input, showInputHandler] = useState(false);

    // this.handleClick = val => {
    //     showInputHandler(val)
    // }


    return (
        <Fragment>
            <div className="base-parent">
                <Container className="base text-center" fluid>
                    <Row className="base-row my-4" >
                        <Col lg={12}>
                            <h1>Helper</h1>
                            {/* render method buttons */}
                            {/* handleClick={(v) => this.handleClick(v)} */}
                            {/* updateInput={showInputHandler} */}
                            <MethodButton  updateInput={showInputHandler}/>
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