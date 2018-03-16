import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AddBtn } from "./CreateRequest/components/AddBtn";
import { InputUnit } from "./CreateRequest/components/InputUnit";
import { InputCost } from "./CreateRequest/components/InputCost";
import { CancelBtn } from "./CreateRequest/components/CancelBtn";
import { InputFld } from "./CreateRequest/components/InputFld";
import { InputTxt } from "./CreateRequest/components/InputTxt";

class CreateRequest extends Component {
    state = {
        itemName: "",
        itemQuant: null,
        measureUnit: "",
        estPrice: null,
        totalPrice: null,
        dateNeeded: null,
        vendor: "",
        justify: "",
        comments: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <form>
                <label for="itemName">Item Name</label>
                <InputFld name="itemName" value={this.state.itemName} onChange={this.handleInputChange} />
                
                </form>
        );
    }
}

ReactDOM.render(<CreateRequest />, document.querySelector("#root"));
