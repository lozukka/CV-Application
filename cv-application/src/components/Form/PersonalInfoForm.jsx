function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }
  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default PersonalInfoForm;
