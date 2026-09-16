import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function CVPreview({ personalInfo, educationExperience, workExperience }) {
  return (
    <>
      <div id="CVPreviewSection">
        <h2>CV renders here</h2>
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview educationExperience={educationExperience} />
        <WorkExperiencePreview workExperience={workExperience} />
      </div>
    </>
  );
}

export default CVPreview;
