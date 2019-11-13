import React from "react";
import { H1, H2, H3 } from "../util/construct-kit";
import styled from "styled-components";

const About = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    `
    const Title = styled(H1)`
        margin: 5vh 0;
        color: #2B2B52;
    `
    const Description = styled(H2)`
        color: #2B2B52;
        max-width: 488px;
        justify-content: center;
    `
    const Paragraph = styled(H3)`
        color: #2B2B52;
        max-width: 488px;
        font-size: 15px;
        justify-content: center;
    `
    const Emojis = styled.span`
    font-size: 25px;
    margin: 3vh 0;
    `
    return (
        <Container>
            <Title>Name That Function</Title>
            <Description>Naming functions when you're coding can be hard.</Description>
            <Emojis>😐😐😐😐😐😐😐😐😐</Emojis>
            <Description>BEHOLD, Name that Function.</Description>
            <Paragraph>Name that Function is your guide to naming functions with non-typical names. No more getResponse()!</Paragraph>
            <Emojis>🤩🤩🤩🤩🤩🤩🤩🤩🤩</Emojis>
            <Paragraph>Just enter the verb and noun or object of your function and pick a name from the many possibilities.</Paragraph>
        </Container>
    );
}

export default About;
