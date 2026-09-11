function EducationForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
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
    </>
  );
}

export default EducationForm;
