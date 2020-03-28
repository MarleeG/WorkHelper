import React, { Fragment } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';


const MethodButton = props => {
    // const methodOptions = ["Remove Space(s)", "Remove New Line Character(s)", "Remove Slashes"];
    const methodOptions = [
        { displayText: "Remove Space(s)", name: "remove_space" },
        { displayText: "Remove New Line Character(s)", name: "remove_new_line_char" },
        { displayText: "Remove Slashes", name: "remove_slashes" }];

    return (
        <Fragment>
            <div className="mt-4">
                <strong>
                    <h4 className="my-2">Select a method</h4>
                </strong>
                
                <ButtonGroup aria-label="Method Options" size="lg">
                    {methodOptions.map((mthd, idx) => {
                        return (
                            <Button
                                variant="dark"
                                key={idx}
                                onClick={() => { props.updateInput(true); props.methodChange(mthd.name) }}
                            >
                                {mthd.displayText}
                            </Button>
                        )
                    })}
                </ButtonGroup>
            </div>
        </Fragment>
    )
}

export default MethodButton;