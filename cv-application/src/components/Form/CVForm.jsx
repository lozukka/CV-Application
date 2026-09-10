function CVForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <div id="CVFormSection">
        <h2>Form renders here</h2>
        <form action="">
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
        </form>
      </div>
    </>
  );
}

export default CVForm;
