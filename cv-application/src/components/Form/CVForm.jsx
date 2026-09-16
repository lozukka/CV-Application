import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

function CVForm({ personalInfo, setPersonalInfo }) {
  function clearAll() {
    console.log("this is working.. kindof");
  }
  return (
    <>
      <div id="CVFormSection">
        <h2>Form renders here</h2>
        <form action="">
          <legend>Personal Information</legend>
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <legend>Education</legend>
          <EducationForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <legend>Work Experience</legend>
          <WorkExperienceForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        </form>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
}

export default CVForm;
