function WorkExperienceForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <div>
        <label htmlFor="workTitle">Work Title:</label>
        <input
          type="text"
          name="workTitle"
          id="workTitle"
          value={personalInfo.workTitle}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              workTitle: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="workPlace">Company:</label>
        <input
          type="text"
          name="workPlace"
          id="workPlace"
          value={personalInfo.workPlace}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              workPlace: event.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default WorkExperienceForm;
