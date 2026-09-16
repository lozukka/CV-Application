import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

function CVForm({
  personalInfo,
  setPersonalInfo,
  education,
  setEducation,
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
            <EducationForm education={education} setEducation={setEducation} />
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>
            <WorkExperienceForm
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
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
