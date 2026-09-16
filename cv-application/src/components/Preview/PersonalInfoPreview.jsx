function PersonalInfoPreview({ personalInfo }) {
  return (
    <>
      <div id="personalInformation">
        <h3>{personalInfo.name}</h3>
        <div>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phoneNumber}</p>
        </div>
        <p>{personalInfo.about}</p>
      </div>
    </>
  );
}

export default PersonalInfoPreview;
