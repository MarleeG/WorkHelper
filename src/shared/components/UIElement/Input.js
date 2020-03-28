import React, { Fragment, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import "./Input.css";

const Input = props => {
    const inputValue = useRef(null);
    function handleSubmit(e) {
        e.preventDefault();
        props.getInputVal(inputValue.current.value);
        inputValue.current.value = "";
    }

    return (
        <Fragment>
            <div className="mt-5 input-form mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formInput">
                        <Form.Control
                            type="text"
                            placeholder="Enter value to be updated" ref={inputValue} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        </Fragment>
    )
}

export default Input;