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
  });
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  function handleClearAll() {
    setPersonalInfo({ name: "", phoneNumber: "", email: "" });
    setEducation([]);
    setWorkExperience([]);
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <CVForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          setEducation={setEducation}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          onClearAll={handleClearAll}
        />
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          workExperience={workExperience}
        />
      </main>
    </>
  );
}

export default App;
