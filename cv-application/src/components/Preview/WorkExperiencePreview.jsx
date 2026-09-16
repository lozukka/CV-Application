function WorkExperiencePreview({ workExperience }) {
  return (
    <>
      <div id="workInformation">
        <h3>Work Experience</h3>
        {workExperience.map((work, index) => (
          <dl key={index}>
            <dt>Company:</dt>
            <dd>{work.workPlace}</dd>
            <dt>Title:</dt>
            <dd>{work.workTitle}</dd>
            <dt>Years:</dt>
            <dd>{work.workYears}</dd>
            <dt>Description:</dt>
            <dd>{work.workDescription}</dd>
          </dl>
        ))}
      </div>
    </>
  );
}

export default WorkExperiencePreview;
