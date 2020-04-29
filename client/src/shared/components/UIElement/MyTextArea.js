import React, {Fragment} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
const TextArea = props => {
    console.log(props);
    // const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque, cupiditate incidunt culpa reiciendis tempora enim possimus, eos accusantium, voluptatibus eaque ratione sed ad eum accusamus maiores corporis consectetur qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque, cupiditate incidunt culpa reiciendis tempora enim possimus, eos accusantium, voluptatibus eaque ratione sed ad eum accusamus maiores corporis consectetur qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque, cupiditate incidunt culpa reiciendis tempora enim possimus, eos accusantium, voluptatibus eaque ratione sed ad eum accusamus maiores corporis consectetur qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque, cupiditate incidunt culpa reiciendis tempora enim possimus, eos accusantium, voluptatibus eaque ratione sed ad eum accusamus maiores corporis consectetur qui?";

    // let mytextarea = useRef(null);
    // mytextarea.autoResize();
    return (
        <Fragment>
            {props.myNewVal !== null &&
                (
                    <div className="mx-5 my-textarea-container">
                        <InputGroup>
                            <FormControl
                                as="textarea"
                                aria-label="With textarea"
                                value={props.myNewVal}
                                className="my-textarea autoresizing"
                                readOnly />
                        </InputGroup>
                    </div>
                )
            }
        </Fragment >
    )
}

export default TextArea;