import { Input, OldValue } from "admin/components/atoms";
import { useState, useEffect } from "react";
import { StyledFieldSet } from "./styles";

const FieldSet = ({ title, value, actionType, dispatch, state }) => {
  const [isOpen, setOpen] = useState(false);
  const newVal = state[actionType];

  const handleSetOpen = () => {
    if (!newVal) {
      setOpen(state => !state);
    }
  };

  useEffect(() => setOpen(false), [value]);

  return (
    <StyledFieldSet>
      <legend>{title}</legend>
      <OldValue
        newValue={newVal}
        value={value || "..."}
        onClick={handleSetOpen}
      />

      {isOpen && (
        <>
          <Input
            type="text"
            value={newVal}
            onChange={({ target }) =>
              dispatch({ type: actionType, payload: target.value })
            }
          />
        </>
      )}
    </StyledFieldSet>
  );
};

export default FieldSet;
