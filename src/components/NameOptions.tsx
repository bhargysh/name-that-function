import React from "react";
import styled from "styled-components";
import HoverCopyButton from "./HoverCopyButton";

type MyProps = {
  appState: Array<any>;
  inputNoun: string;
};
const Container = styled.div``;
const TextField = styled.div`
  margin: 2vh 0;
  :hover {
    cursor: pointer;
    color: #e74292;
  }
`;

const NameOptions = ({ appState, inputNoun }: MyProps) => {
  let options: Array<string> = [];
  const capitaliseFirstLetter = (noun: string) => {
    const firstChar = noun.charAt(0).toUpperCase();
    const capitalisedNoun = firstChar + noun.substr(1);
    return capitalisedNoun;
  };

  const combineSynonymWithNoun = (
    listOfSynonyms: Array<string>,
    noun: string
  ) => {
    const capitalisedNoun = capitaliseFirstLetter(noun);
    const listOfOptions = listOfSynonyms.map(syn => syn + capitalisedNoun);
    return listOfOptions;
  };
  if (appState) {
    const meta = appState[0]["meta"];
    if (meta) {
      const synonyms: Array<string> = meta["syns"][0];
      options = combineSynonymWithNoun(synonyms, inputNoun);
    }
  }
  const copyToClipboard = (someInt: number) => {
    const wordToCopy = options[someInt];
    document.addEventListener("copy", (e: ClipboardEvent) => {
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", wordToCopy);
      }
      e.preventDefault();
      document.removeEventListener("copy", () => {});
    });
    document.execCommand("copy");
  };
  return (
    <Container>
      {options.map((option, index) => {
        return (
          <TextField key={`function-name-${index}`}>
            {option}
            <HoverCopyButton index={index} func={copyToClipboard} />
          </TextField>
        );
      })}
    </Container>
  );
};

export default NameOptions;
