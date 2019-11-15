import React, { useState } from "react";
import { TextInput, Button, H1 } from "../util/construct-kit";
import styled from "styled-components";

// TODO: add form field validity (i.e. can only be letters) where setSubmitted will be called

const InputForm = ({
  onSubmit
}: {
  onSubmit: (verb: string, noun: string) => void;
}) => {
  const [verb, setVerb] = useState("");
  const [noun, setNoun] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & button {
      align-self: center;
      margin: 20px 0;
    }
  `;
  const FormTitle = styled(H1)`
    margin: 3vh 0;
    color: #2b2b52;
  `;
  const FlexTextInput = styled(TextInput)`
    width: 50vh; // want to make the boxes wider but still responsible
    line-height: 30px;
    @media (max-width: 500px) {
      width: 100%;
      flex-direction: column;
    }
  `;
  const DarkButton = styled(Button)`
    background-color: #2b2b52;
    border-color: #2b2b52;
    font-weight: bold;
    ::before {
      content: "💥";
      font-size: 25px;
    }
    :hover {
      background-color: #8b78e6;
      border-color: #8b78e6;
    }
  `;
  return (
    <Form>
      <FormTitle>👇 Generate your function name 👇</FormTitle>
      <FlexTextInput
        id="verb"
        label="Your Verb"
        placeholder="E.g. construct, fetch, create"
        help="insert a verb e.g. construct"
        value={verb}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setVerb(e.currentTarget.value)
        }
      />
      <FlexTextInput
        id="noun"
        label="Your Noun"
        placeholder="E.g. blog, email, post"
        help="the object or noun e.g. pricing details"
        value={noun}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setNoun(e.currentTarget.value)
        }
      />
      <DarkButton
        type="submit"
        onClick={(e: Event) => {
          e.preventDefault();
          onSubmit(verb, noun);
        }}
      >
        Submit
      </DarkButton>
    </Form>
  );
};
export default InputForm;
