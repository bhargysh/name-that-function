import React, { useState } from "react";
import { TextInput, Button } from "../util/construct-kit";
import styled from "styled-components";

// TODO: add form field validity (i.e. can only be letters) where setSubmitted will be called

const InputForm = ({onSubmit}: {onSubmit: (verb: String, noun: String) => void}) => {
  const [verb, setVerb] = useState("");
  const [noun, setNoun] = useState("");
  // const [submitted, setSubmitted] = useState(false);
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
          value={verb}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setVerb(e.currentTarget.value)} // update the verb from the input
        />
        <TextInput
          id="noun"
          label="Your Noun"
          placeholder="price"
          help="the object or noun e.g. pricing details"
          value={noun}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setNoun(e.currentTarget.value)} // update the noun from the input
        />
        <Button type="submit" onClick={(e: Event) => {e.preventDefault(); onSubmit(verb, noun)}}>Submit</Button>
      </Form>
    );
}
export default InputForm;
