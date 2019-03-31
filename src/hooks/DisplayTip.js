import React, { useState } from "react";

function DisplayTip(props) {
  return (
    <div>
      {/* {props && props.tipObject.tipTitle} */}
      <div>Current Tip: {props.tipObject && props.tipObject.tipTitle}</div>
      <div>{props.tipObject && props.tipObject.tip}</div>
    </div>
  );
}

export default DisplayTip;
