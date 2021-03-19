import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message || 'Loading...'}</div>
    </div>
  );
};


Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
