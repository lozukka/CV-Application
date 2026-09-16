import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function CVPreview({ personalInfo }) {
  return (
    <>
      <div id="CVPreviewSection">
        <h2>CV renders here</h2>
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview personalInfo={personalInfo} />
        <WorkExperiencePreview personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default CVPreview;
