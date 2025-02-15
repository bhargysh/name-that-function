import React, { useState, useRef, RefObject } from "react";
import { ConstructKit } from "./util/construct-kit";
import InputForm from "./components/InputForm";
import About from "./components/About";
import ArrowButton from "./components/ArrowButton";
import NameOptions from "./components/NameOptions";
import styled from "styled-components";

const App: React.FC = () => {
  const BASE_URL =
    "https://www.dictionaryapi.com/api/v3/references/thesaurus/json";

  const [appState, setAppState] = useState([{}]);
  const [inputNoun, setNoun] = useState("");
  const inputFormRef = useRef(null);

  const scrollToRef = (ref: RefObject<any>) => {
    ref && window.scrollTo(0, ref.current.offsetTop);
  };
  const executeScrollToForm = () => scrollToRef(inputFormRef);

  const getSynonyms = (verb: string, noun: string) => {
    fetch(`${BASE_URL}/${verb}?key=${process.env.REACT_APP_MERIAM_WEBSTER_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setAppState(data);
        setNoun(noun);
      });
  };
  const Wrapper = styled.section`
    background-color: #f5bcba;
  `;
  const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  `;
  return (
    <ConstructKit>
      <Wrapper>
        <Section>
          <About />
          <ArrowButton onClick={executeScrollToForm} />
        </Section>
        <Section ref={inputFormRef}>
          <InputForm onSubmit={getSynonyms} />
          <NameOptions appState={appState} inputNoun={inputNoun} />
        </Section>
      </Wrapper>
    </ConstructKit>
  );
};

export default App;
