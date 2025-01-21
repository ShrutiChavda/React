import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    cricketerName: "",
    gender: "",
    email: "",
    matches: [],
    state: "",
    dob: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const states = ["Select State", "Gujarat", "Maharashtra", "Delhi", "Punjab"];
  const matchTypes = ["ODI", "TEST", "T20", "Domestic"];

  const validateForm = () => {
    const newErrors = {};
    if (formData.cricketerName.length < 10) {
      newErrors.cricketerName = "Name must be at least 10 characters long";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }
    if (formData.matches.length === 0) {
      newErrors.matches = "Please select at least one match type";
    }
    if (!formData.state || formData.state === "Select State") {
      newErrors.state = "Please select a state";
    }
    if (!formData.dob) {
      newErrors.dob = "Please enter your date of birth";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      matches: checked
        ? [...prev.matches, value]
        : prev.matches.filter((match) => match !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setFormData({
        cricketerName: "",
        gender: "",
        email: "",
        matches: [],
        state: "",
        dob: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cricketer Name:
            <input
              type="text"
              name="cricketerName"
              value={formData.cricketerName}
              onChange={handleInputChange}
            />
          </label>
          {errors.cricketerName && <p style={{ color: "red" }}>{errors.cricketerName}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
          </label>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Types of Matches Played:</label>
          {matchTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                checked={formData.matches.includes(type)}
                onChange={handleCheckboxChange}
              />
              {type}
            </label>
          ))}
          {errors.matches && <p style={{ color: "red" }}>{errors.matches}</p>}
        </div>

        <div>
          <label>
            State:
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
          {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
        </div>

        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </label>
          {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Details:</h3>
          <p><b>Cricketer Name:</b> {submittedData.cricketerName}</p>
          <p><b>Gender:</b> {submittedData.gender}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Matches Played:</b> {submittedData.matches.join(", ")}</p>
          <p><b>State:</b> {submittedData.state}</p>
          <p><b>Date of Birth:</b> {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
