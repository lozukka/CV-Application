function WorkExperiencePreview({ personalInfo }) {
  return (
    <>
      <div id="workInformation">
        <h3>Work Experience</h3>
        <dl>
          <dt>Title:</dt>
          <dd>{personalInfo.workTitle}</dd>
          <dt>Name of the Company:</dt>
          <dd>{personalInfo.workCompany}</dd>
          <dt>Years:</dt>
          <dd>{personalInfo.workYears}</dd>
          <dt>Description:</dt>
          <dd>{personalInfo.workDescription}</dd>
        </dl>
      </div>
    </>
  );
}

export default WorkExperiencePreview;
