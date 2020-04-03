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
                    {/* aria-label="With textarea" */}
                        <Form.Control
                            // type="text"
                            as="textarea"
                            placeholder={props.pH}
                            ref={inputValue} 
                            className="my-input-textarea autoresizing"
                            />
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