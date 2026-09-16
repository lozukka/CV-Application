function EducationPreview({ educationExperience }) {
  return (
    <div id="educationInformation">
      <h3>Education</h3>
      {educationExperience.map((education, index) => (
        <dl key={index}>
          <dt>Name of the School:</dt>
          <dd>{education.schoolName}</dd>
          <dt>Name of Examination:</dt>
          <dd>{education.schoolExamination}</dd>
          <dt>Years:</dt>
          <dd>{education.schoolYears}</dd>
          <dt>Description:</dt>
          <dd>{education.schoolDescription}</dd>
        </dl>
      ))}
    </div>
  );
}

export default EducationPreview;
