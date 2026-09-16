function EducationForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <div>
        <label htmlFor="schoolExamination">Examination:</label>
        <input
          type="text"
          name="examination"
          id="examination"
          value={personalInfo.schoolExamination}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              schoolExamination: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="schoolName">Name of the School:</label>
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
      <div>
        <label htmlFor="schoolYears">Years:</label>
        <input
          type="text"
          name="years"
          id="years"
          value={personalInfo.schoolYears}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              schoolYears: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="schoolDescription">Description:</label>
        <input
          type="textarea"
          name="Description"
          id="Description"
          value={personalInfo.schoolDescription}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              schoolDescription: event.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default EducationForm;
