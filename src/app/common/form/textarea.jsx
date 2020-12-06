import React from "react";
import { Form, Label } from "semantic-ui-react";

const Textarea = ({
  input,
  rows,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div>
      <Form.Field>
        <textarea
          {...input}
          placeholder={placeholder}
          rows={rows}
          type={type}
        ></textarea>
        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    </div>
  );
};

export default Textarea;
