function EducationPreview({ personalInfo }) {
  return (
    <>
      <div id="educationInformation">
        <h3>Education</h3>
        <dl>
          <dt>Name of the School:</dt>
          <dd>{personalInfo.school}</dd>
          <dt>Name of Examination:</dt>
          <dd>{personalInfo.schoolExamination}</dd>
          <dt>Years:</dt>
          <dd>{personalInfo.schoolYears}</dd>
          <dt>Description:</dt>
          <dd>{personalInfo.schoolDescription}</dd>
        </dl>
      </div>
    </>
  );
}

export default EducationPreview;
