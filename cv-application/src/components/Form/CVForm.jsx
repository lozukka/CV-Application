function CVForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <div id="CVFormSection">
        <h2>Form renders here</h2>
        <form action="">
          <legend>Personal Information</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={personalInfo.name}
              onChange={(event) =>
                setPersonalInfo({ ...personalInfo, name: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={personalInfo.email}
              onChange={(event) =>
                setPersonalInfo({ ...personalInfo, email: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={personalInfo.phoneNumber}
              onChange={(event) =>
                setPersonalInfo({
                  ...personalInfo,
                  phoneNumber: event.target.value,
                })
              }
            />
          </div>
          <legend>Education</legend>
          <div>
            <label htmlFor="schoolName">School:</label>
            <input
              type="text"
              name="school"
              id="school"
              value={personalInfo.school}
              onChange={(event) =>
                setPersonalInfo({
                  ...personalInfo,
                  school: event.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CVForm;
