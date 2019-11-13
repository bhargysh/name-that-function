import React from "react";
import { TextInput, Button } from "../util/construct-kit";
import styled from "styled-components";

const InputForm = () => {
    const Form = styled.form`
    display: flex;
    flex-direction: column;
    & button {
      align-self: center;
      margin: 20px 0;
    }
  `;
    return (
        <Form>
          <TextInput
            id="verb"
            label="Your Verb"
            placeholder="construct"
            help="insert a verb e.g. construct"
          />
          <TextInput
            id="noun"
            label="Your Noun"
            placeholder="price"
            help="the object or noun e.g. pricing details"
          />
          <Button type="submit">Submit</Button>
        </Form>
      );
}
export default InputForm;
