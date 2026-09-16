import { useState } from "react";
import Header from "./components/Header.jsx";
import CVForm from "./components/Form/CVForm.jsx";
import CVPreview from "./components/Preview/CVPreview.jsx";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "First Name Last Name",
    phoneNumber: "040-1234567",
    email: "first.last@email.com",
    school: "",
    schoolExamination: "",
    schoolDescription: "",
    schoolYears: "",
    workTitle: "",
    workPlace: "",
    workDescription: "",
    workYears: "",
  });
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <CVForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <CVPreview personalInfo={personalInfo} />
      </main>
    </>
  );
}

export default App;
