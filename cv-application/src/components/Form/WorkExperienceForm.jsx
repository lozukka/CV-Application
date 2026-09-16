import { useState } from "react";

function WorkExperienceForm({ workExperience, setWorkExperience }) {
  const [work, setWork] = useState({
    workTitle: "",
    workPlace: "",
    workYears: "",
    workDescription: "",
  });
  function addNew() {
    setWorkExperience([...workExperience, work]);
    setWork({
      workTitle: "",
      workPlace: "",
      workYears: "",
      workDescription: "",
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setWork({ ...work, [name]: value });
  }
  return (
    <>
      <div className="formInput">
        <label htmlFor="workTitle">Title:</label>
        <input
          type="text"
          name="workTitle"
          id="workTitle"
          value={work.workTitle}
          onChange={handleChange}
        />
      </div>
      <div className="formInput">
        <label htmlFor="workPlace">Company:</label>
        <input
          type="text"
          name="workPlace"
          id="workPlace"
          value={work.workPlace}
          onChange={handleChange}
        />
      </div>
      <div className="formInput">
        <label htmlFor="workYears">Years:</label>
        <input
          type="text"
          name="workYears"
          id="workYears"
          value={work.workYears}
          onChange={handleChange}
        />
      </div>
      <div className="formInput">
        <label htmlFor="workDescription">Description:</label>
        <textarea
          name="workDescription"
          id="workDescription"
          value={work.workDescription}
          onChange={handleChange}
          rows="5"
        ></textarea>
        <button type="button" onClick={addNew}>
          Add New
        </button>
      </div>
    </>
  );
}

export default WorkExperienceForm;
