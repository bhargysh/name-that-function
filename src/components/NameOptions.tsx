import React from "react";
import styled from "styled-components";

type MyProps = {
  appState: Array<any>;
  inputNoun: string;
};
const Container = styled.div``;
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
  return (
    <Container>
      {options.map((option, index) => {
        return <div key={`function-name-${index}`}>{option}</div>;
      })}
    </Container>
  );
};

export default NameOptions;
