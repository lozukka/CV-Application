function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
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
          name="phoneNumber"
          id="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={(event) =>
            setPersonalInfo({
              ...personalInfo,
              phoneNumber: event.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default PersonalInfoForm;
