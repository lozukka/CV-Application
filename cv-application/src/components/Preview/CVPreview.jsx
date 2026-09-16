import EducationPreview from "./EducationPreview";
import WorkExperiencePreview from "./WorkExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function CVPreview({ personalInfo, educationExperience, workExperience }) {
  return (
    <>
      <div id="CVPreviewSection">
        <div id="CV">
          <PersonalInfoPreview personalInfo={personalInfo} />
          <EducationPreview educationExperience={educationExperience} />
          <WorkExperiencePreview workExperience={workExperience} />
        </div>
      </div>
    </>
  );
}

export default CVPreview;
