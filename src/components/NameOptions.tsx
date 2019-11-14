import React from "react";
// import styled from "styled-components";

type MyProps = {
    appState: Array<any>,
    inputNoun: string
}
const NameOptions = ({appState, inputNoun}: MyProps) => {
    if (appState) {
        const meta = appState[0]["meta"]
        if (meta) {
            const synonyms = meta["syns"][0]
            console.log(synonyms);
        }
    }
    return (
        <div></div>
    );

}

export default NameOptions;
