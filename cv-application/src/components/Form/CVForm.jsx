import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

function CVForm({
  personalInfo,
  setPersonalInfo,
  educationExperience,
  setEducationExperience,
  workExperience,
  setWorkExperience,
  onClearAll,
}) {
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
              educationExperience={educationExperience}
              setEducationExperience={setEducationExperience}
            />
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>
            <WorkExperienceForm
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
          </fieldset>
          <button type="button" onClick={onClearAll} id="clearAllButton">
            Clear All
          </button>
        </form>
      </div>
    </>
  );
}

export default CVForm;
