import React, { useRef, useState } from "react";
import { TextInput, Button, H1 } from "../util/construct-kit";
import styled from "styled-components";

const InputForm = ({
  onSubmit
}: {
  onSubmit: (verb: string, noun: string) => void;
}) => {
  const nounRef = useRef<HTMLInputElement>(null);
  const verbRef = useRef<HTMLInputElement>(null);
  const [validVerbState, setValidVerbState] = useState(true);
  const [validNounState, setValidNounState] = useState(true);

  const invalidCharacters = /([^1234567890~`!@#$%^&*()_+[\]{}|;':,./<>?'"\s])\w+/g;
  const validateInput = (string: string) => {
    if (!string.search(invalidCharacters)) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnsubmit = (verbValue: string, nounValue: string) => {
    if (validateInput(verbValue) && validateInput(nounValue)) {
      onSubmit(verbValue, nounValue);
    }
    if (!validateInput(verbValue)) {
      setValidVerbState(!validVerbState);
    }
    if (!validateInput(nounValue)) {
      setValidNounState(!validNounState);
    }
  };
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & button {
      align-self: center;
      margin: 20px 0;
    }
    @media (max-width: 700px) {
      width: 90%;
      flex-direction: column;
    }
  `;
  const FormTitle = styled(H1)`
    margin: 3vh 0;
    color: #2b2b52;
    @media (max-width: 700px) {
      width: 90%;
      flex-direction: row;
    }
  `;
  const FlexTextInput = styled(TextInput)`
    width: 50vh;
    line-height: 30px;
    @media (max-width: 700px) {
      width: 90%;
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
        ref={verbRef}
        // errorMessage={hasError && "Error" }
      />
      {!validVerbState && <div>🙅‍♀️ Invalid verb, please re-enter</div>}
      <FlexTextInput
        id="noun"
        label="Your Noun"
        placeholder="E.g. blog, email, post"
        help="the object or noun e.g. pricing details"
        ref={nounRef}
      />
      {!validNounState && <div>🙅‍♀️ Invalid noun, please re-enter</div>}
      <DarkButton
        type="submit"
        onClick={(e: Event) => {
          e.preventDefault();
          if (verbRef && nounRef && verbRef.current && nounRef.current) {
            const verbValue = verbRef.current.value;
            const nounValue = nounRef.current.value;
            handleOnsubmit(verbValue, nounValue);
          }
        }}
      >
        Submit
      </DarkButton>
    </Form>
  );
};
export default InputForm;
