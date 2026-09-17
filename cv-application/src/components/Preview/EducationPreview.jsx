function EducationPreview({ educationExperience }) {
  return (
    <div id="educationInformation">
      <h3>Education</h3>
      {educationExperience.map((education, index) => (
        <div key={index}>
          <h4>
            {education.schoolDegree}, {education.schoolName}
          </h4>
          <p>{education.schoolYears}</p>
          <p>{education.schoolDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
