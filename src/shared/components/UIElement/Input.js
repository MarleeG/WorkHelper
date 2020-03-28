import React, { Fragment, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import "./Input.css";

const Input = props => {
    const inputValue = useRef(null);
    function handleSubmit() {
        inputValue.current.value = "";
        // console.log(inputValue.current.value);
        // inputValue = useRef("");
    }

    return (
        <Fragment>
            <div className="mt-5 input-form mx-auto">
                <Form>
                    <Form.Group controlId="formInput">
                        <Form.Control type="text" placeholder="Enter value to be updated" ref={inputValue} />
                    </Form.Group>
                </Form>


                <Button variant="dark" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>

            </div>
        </Fragment>
    )
}

export default Input;