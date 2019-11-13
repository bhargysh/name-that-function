import React from "react";
import { ConstructKit, H1, H2 } from "./util/construct-kit";
import InputForm from "./components/InputForm";
import styled from "styled-components";

const App: React.FC = () => {
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
        <H2>Naming is hard, right? Name that Function will be your naming guide for the functions you need.</H2>
      </Section>
      <Section>
        <InputForm/>
      </Section>
    </ConstructKit>
  );
}

export default App;
