import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AddBtn } from "./components/AddBtn";
import { InputUnit } from "./components/InputUnit";
import { InputCost } from "./components/InputCost";
import { CancelBtn } from "./components/CancelBtn";
import { InputFld } from "./components/InputFld";
import { InputTxt } from "./components/InputTxt";

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

ReactDOM.render(<CreateRequest />, document.querySelector(".container"));
