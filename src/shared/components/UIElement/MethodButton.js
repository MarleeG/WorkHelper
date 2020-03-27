import React, { Fragment } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';


const MethodButton = props => {
    const methodText = ["Remove Space(s)", "Remove New Line Character(s)", "Remove Slashes"];

    return (
        <Fragment>
            {/* <h3 className="text-center">Method Button</h3> */}
            <div className="mt-4">
            <ButtonGroup aria-label="Method Options" size="lg">
                {methodText.map((mthd, idx) => {
                    return (
                        <Button variant="dark" key={idx}>{mthd}</Button>
                    )
                })}
            </ButtonGroup>
            </div>
            
        </Fragment>
    )
}

export default MethodButton;