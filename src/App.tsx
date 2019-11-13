import React, { useState } from "react";
import { ConstructKit, H1, H2 } from "./util/construct-kit";
import InputForm from "./components/InputForm";
import styled from "styled-components";

const App: React.FC = () => {
  const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json'
  const API_KEY = '6d527ea3-6da9-4a03-843c-69a3ab911000';

  const [ appState, setAppState ] = useState({});

  const getSynonyms = (verb: String) => {
    console.log('reaches getSynonyms');
    fetch(`${BASE_URL}/${verb}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAppState(data);
    });
  }

  const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 20vh;
  `
  return (
    <ConstructKit>
      <Section>
        <H1>Name That Function</H1>
        <H2>Naming is hard. Name that Function is your naming guide to create those important functions for your app.
          Simply enter the verb and object/noun for your function and pick a name from the many possibilities!</H2>
      </Section>
      <Section>
        <InputForm onSubmit={getSynonyms} />
      </Section>
      <Section>
        {JSON.stringify(appState)}
      </Section>
    </ConstructKit>
  );
}

export default App;
