import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { findRenderedComponentWithType } from "react-dom/test-utils";
class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Please share your story with us</h1>
          <div className="para">
            <h5>
              Providing further details will help us better understand your
              current situation. Please include answers to the following
              questions: Why do you need a gift card? Have there been any major
              life events that may have impacted your financial situation
              recently? What do you plan to use the gift card for?
            </h5>
          </div>
        </div>
        <Form>
          <FormGroup>
            <div className="textbox">
              <Label for="exampleText"></Label>
              <div className="input">
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Your story..."
                />
              </div>
            </div>
          </FormGroup>
            <button class="button1">Next</button>
        </Form>
      </div>
    );
  }
}

export default Main;
