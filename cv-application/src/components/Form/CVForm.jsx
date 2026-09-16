import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

function CVForm({ personalInfo, setPersonalInfo, onClearAll }) {
  return (
    <>
      <div id="CVFormSection">
        <h2>Form renders here</h2>
        <form action="">
          <fieldset>
            <legend>Personal Information</legend>
            <PersonalInfoForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </fieldset>
          <fieldset>
            <legend>Education</legend>
            <EducationForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>
            <WorkExperienceForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </fieldset>
        </form>
        <button type="button" onClick={onClearAll}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default CVForm;
