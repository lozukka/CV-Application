function WorkExperiencePreview({ workExperience }) {
  return (
    <>
      <div id="workInformation">
        <h3>Work Experience</h3>
        {workExperience.map((work, index) => (
          <div key={index}>
            <h4>
              {work.workTitle}, {work.workPlace}
            </h4>
            <p>{work.workYears}</p>
            <p>{work.workDescription}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkExperiencePreview;
