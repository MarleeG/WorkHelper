import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./base.css"
import MethodButton from "../../shared/components/UIElement/MethodButton";

const Base = props => {
    return (
        <Fragment>
            <div className="base-parent">

                <Container className="base text-center" fluid>
                    <Row className="base-row my-4" >
                        <Col lg={12}>
                            <h1>Helper</h1>
                            {/* render method buttons */}
                            <MethodButton/>
                        </Col>
                    </Row>

                </Container>
            </div>

        </Fragment>
    )
}

export default Base;