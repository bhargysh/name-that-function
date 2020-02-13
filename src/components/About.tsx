import React from "react";
import { H1, H2, H3, Box } from "../util/construct-kit";
import styled from "styled-components";

const About = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    @media (max-width: 700px) {
      width: 70%;
      flex-direction: column;
    }
  `;
  const Description = styled(H2)`
    color: #2b2b52;
    max-width: 488px;
    justify-content: center;
  `;
  const Paragraph = styled(H3)`
    color: #2b2b52;
    max-width: 488px;
    font-size: 15px;
    justify-content: center;
  `;
  const Emojis = styled.span`
    font-size: 25px;
    margin: 3vh 0;
  `;
  return (
    <Container>
      <Description>
        Naming functions can be hard.
      </Description>
      <Emojis>😐😐😐😐😐😐😐😐</Emojis>
      <Description>Welcome to Name That Function</Description>
      <Paragraph>
        Name That Function is your guide to naming
        functions with non-typical names. No more <code>{"getResponse()"}</code>.
      </Paragraph>
      <Emojis>🤩🤩🤩🤩🤩🤩🤩🤩</Emojis>
      <Paragraph>
        Just enter the verb, noun/object and pick a name from
        the many possibilities.
      </Paragraph>
    </Container>
  );
};

export default About;
