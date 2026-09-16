function WorkExperienceForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <div>
        <label htmlFor="workTitle">Title:</label>
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
      <div>
        <label htmlFor="workYears">Years:</label>
        <input
          type="text"
          name="workYears"
          id="workYears"
          value={personalInfo.workYears}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              workYears: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="workDescription">Description:</label>
        <br />
        <textarea
          name="workDescription"
          id="workDescription"
          value={personalInfo.workDescription}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              workDescription: event.target.value,
            })
          }
          rows="5"
        ></textarea>
      </div>
    </>
  );
}

export default WorkExperienceForm;
