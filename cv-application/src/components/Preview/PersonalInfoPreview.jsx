function PersonalInfoPreview({ personalInfo }) {
  return (
    <>
      <div id="personalInformation">
        <h3>Personal Information</h3>
        <dl>
          <dt>Name:</dt>
          <dd>{personalInfo.name}</dd>
          <dt>Email:</dt>
          <dd>{personalInfo.email}</dd>
          <dt>Phone Number:</dt>
          <dd>{personalInfo.phoneNumber}</dd>
          <dt>About:</dt>
          <dd>{personalInfo.about}</dd>
        </dl>
      </div>
    </>
  );
}

export default PersonalInfoPreview;
