import "./App.css";
import { Skills } from "./layout/sections/skills/Skills";
import { Header } from "./layout/header/Header";
import { Hero } from "./layout/sections/hero/Hero";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
    </div>
  );
}

export default App;
