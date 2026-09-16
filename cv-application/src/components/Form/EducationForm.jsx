import { useState } from "react";

function EducationForm({ educationExperience, setEducationExperience }) {
  const [education, setEducation] = useState({
    schoolExamination: "",
    schoolName: "",
    schoolYears: "",
    schoolDescription: "",
  });
  function addNewEducation() {
    setEducationExperience([...educationExperience, education]);
    setEducation({
      schoolExamination: "",
      schoolName: "",
      schoolYears: "",
      schoolDescription: "",
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  }
  return (
    <>
      <div>
        <label htmlFor="schoolExamination">Examination:</label>
        <input
          type="text"
          name="schoolExamination"
          id="schoolExamination"
          value={education.schoolExamination}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="schoolName">Name of the School:</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={education.schoolName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="schoolYears">Years:</label>
        <input
          type="text"
          name="schoolYears"
          id="schoolYears"
          value={education.schoolYears}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="schoolDescription">Description:</label>
        <br />
        <textarea
          name="schoolDescription"
          id="schoolDescription"
          value={education.schoolDescription}
          onChange={handleChange}
          rows="5"
        ></textarea>
        <button type="button" onClick={addNewEducation}>
          Add New
        </button>
      </div>
    </>
  );
}

export default EducationForm;
