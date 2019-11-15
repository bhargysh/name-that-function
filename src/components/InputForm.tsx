import React, { useRef } from "react";
import { TextInput, Button, H1 } from "../util/construct-kit";
import styled from "styled-components";

// TODO: add form field validity (i.e. can only be letters) where setSubmitted will be called

const InputForm = ({
  onSubmit
}: {
  onSubmit: (verb: string, noun: string) => void;
}) => {
  const nounRef: React.MutableRefObject<any> = useRef(null);
  const verbRef: React.MutableRefObject<any> = useRef(null);

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
      />
      <FlexTextInput
        id="noun"
        label="Your Noun"
        placeholder="E.g. blog, email, post"
        help="the object or noun e.g. pricing details"
        ref={nounRef}
      />
      <DarkButton
        type="submit"
        onClick={(e: Event) => {
          e.preventDefault();
          if (verbRef && nounRef) {
            onSubmit(verbRef.current.value, nounRef.current.value);
          }
        }}
      >
        Submit
      </DarkButton>
    </Form>
  );
};
export default InputForm;
