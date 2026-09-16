import EducationPreview from "./EducationPreview";

function CVPreview({ personalInfo }) {
  return (
    <>
      <div id="CVPreviewSection">
        <h2>Preview of the CV</h2>
        <div id="personalInformation">
          <h3>Personal Information</h3>
          <dl>
            <dt>Name: </dt>
            <dd>{personalInfo.name}</dd>
            <dt>Email:</dt>
            <dd>{personalInfo.email}</dd>
            <dt>Phone Number:</dt>
            <dd>{personalInfo.phoneNumber}</dd>
          </dl>
        </div>
        <EducationPreview personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default CVPreview;
