import {} from "react";

import { StyledLabel, DivAsInput } from "./styles";

const Input = ({ type, value, onClick = null, onChange = null }) => {
  return (
    <StyledLabel>
      <p>New Value</p>
      <input type={type} value={value} onClick={onClick} onChange={onChange} />
    </StyledLabel>
  );
};

export const OldValue = ({ value, onClick = null, newValue, image = null }) => {
  return (
    <DivAsInput onClick={onClick} title="click to change">
      {image ? (
        <img
          src={`${image.path}${newValue ? newValue :image.name}`}
          alt={newValue ? newValue.slice(0, -4) : image.name.slice(0, -4)}
        />
      ) : (
        value
      )}
      <button type="button" data-value={!!newValue}>
        Change
      </button>
    </DivAsInput>
  );
};

export default Input;
