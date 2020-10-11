import {} from "react";

import { StyledLabel, DivasInput } from "./styles";

const Input = ({ type, value, onClick = null, onChange = null }) => {
  return (
    <StyledLabel>
      <p>New Value</p>
      <input type={type} value={value} onClick={onClick} onChange={onChange} />
    </StyledLabel>
  );
};

export const OldValue = ({ value, onClick = null, newValue }) => {
  return (
    <DivasInput onClick={onClick} title="click to change">
      {value}
      <button type="button" data-value={!!newValue}>
        Change
      </button>
    </DivasInput>
  );
};

export default Input;
