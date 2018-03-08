import React from "react";

export const AddBtn = props => 
<button {...props} className={"btn btn-success"}>
{props.children}
</button>;