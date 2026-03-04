import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Title>Welcome to IT-INCUBATOR</Title>
      <StyledBtn>Hello</StyledBtn>
      Deploy ready
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
const StyledBtn = styled.button`
  border: none;
  background-color: black;
  padding: 10px 20px;
  color: blue;
  border-radius: 5px;
`;
