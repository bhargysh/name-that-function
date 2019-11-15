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
  const TitleBox = styled(Box)`
    background-color: transparent;
    color: #2b2b52;
    margin: 4vh 0;
  `;
  const Title = styled(H1)`
    margin: 1vh 1vh;
    color: #2b2b52;
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
      <TitleBox>
        <Title>Name That Function</Title>
      </TitleBox>
      <Description>
        Naming functions when you're coding can be hard.
      </Description>
      <Emojis>😐😐😐😐😐😐😐😐</Emojis>
      <Description>BEHOLD, Name that Function.</Description>
      <Paragraph>
        Name that Function is your guide to naming functions with non-typical
        names. No more <code>{"getResponse()"}</code>!
      </Paragraph>
      <Emojis>🤩🤩🤩🤩🤩🤩🤩🤩</Emojis>
      <Paragraph>
        Just enter the verb and noun or object of your function and pick a name
        from the many possibilities.
      </Paragraph>
    </Container>
  );
};

export default About;
