import React, { useState } from "react";
import { ConstructKit } from "./util/construct-kit";
import InputForm from "./components/InputForm";
import About from "./components/About";
import ArrowButton from "./components/ArrowButton";
import NameOptions from "./components/NameOptions";
import styled from "styled-components";

const App: React.FC = () => {
  const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json'
  const API_KEY = '6d527ea3-6da9-4a03-843c-69a3ab911000';

  const [ appState, setAppState ] = useState([{}]);
  const [ inputNoun, setNoun ] = useState("");

  const getSynonyms = (verb: string, noun: string) => {
    fetch(`${BASE_URL}/${verb}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setAppState(data);
      setNoun(noun);
    });
  }
  const Wrapper = styled.section`
    background-color: #F5BCBA;
  `;
  const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 20vh;
  `;
  return (
    <ConstructKit>
      <Wrapper>
        <Section>
          <About />
        </Section>
        <ArrowButton />
        <Section>
          <InputForm onSubmit={getSynonyms} />
        </Section>
        <Section>
          <NameOptions appState={appState} inputNoun={inputNoun}/>
        </Section>
      </Wrapper>
    </ConstructKit>
  );
}

export default App;
