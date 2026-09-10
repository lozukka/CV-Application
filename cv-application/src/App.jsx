import { useState } from "react";
import Header from "./components/Header.jsx";
import CVForm from "./components/Form/CVForm.jsx";
import CVPreview from "./components/Preview/CVPreview.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <CVForm />
        <CVPreview />
      </main>
    </>
  );
}

export default App;
