import React, { useState, SyntheticEvent } from "react";
import { TextInput, Button } from "../util/construct-kit";
import styled from "styled-components";

// TODO: add form field validity (i.e. can only be letters) where setSubmitted will be called

const InputForm = ({onSubmit}: {onSubmit: (verb: String) => void}) => {
    const Form = styled.form`
    display: flex;
    flex-direction: column;
    & button {
      align-self: center;
      margin: 20px 0;
    }
  `;
  const [submitted, setSubmitted] = useState(false);
  const [verb, setVerb] = useState("");
    return (
        <Form>
          <TextInput
            id="verb"
            label="Your Verb"
            placeholder="construct"
            help="insert a verb e.g. construct"
            onBlur={(e: React.FormEvent<HTMLInputElement>) => setVerb(e.currentTarget.value)}
          />
          <TextInput
            id="noun"
            label="Your Noun"
            placeholder="price"
            help="the object or noun e.g. pricing details"
          />
          <Button type="submit" disabled={submitted} onClick={(e: Event) => {e.preventDefault(); onSubmit(verb)}}>Submit</Button>
        </Form>
      );
}
export default InputForm;
