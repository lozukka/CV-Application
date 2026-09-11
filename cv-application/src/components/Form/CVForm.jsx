import PersonalInfoForm from "./PersonalInfoForm";

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
          <div>
            <label htmlFor="schoolName">School:</label>
            <input
              type="text"
              name="school"
              id="school"
              value={personalInfo.school}
              onChange={(event) =>
                setPersonalInfo({
                  ...personalInfo,
                  school: event.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CVForm;
