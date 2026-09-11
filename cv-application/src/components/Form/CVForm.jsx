import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";

function CVForm({ personalInfo, setPersonalInfo }) {
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
        </form>
      </div>
    </>
  );
}

export default CVForm;
