import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    objective: '',
    degree: 'Bsc IT',
    skills: '',
  });
  const [cvData, setCvData] = useState('');

  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData(formData);
  };
  const getskillsArray = (skillsString) =>{
    if (!skillsString) return [];
    return skillsString.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
  };
  return (
    <div>
      <h2>React CV Builder Form</h2>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label>FullName</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="fullname" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email"/>
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="phone"/>
        </div>
        <div>
          <label>University</label>
          <input type="text" name="university" value={formData.university} onChange={handleChange} placeholder="univrsity" />
        </div>
        <div>
          <label>Objective</label>
          <textarea name="objective" value={formData.objective} onChange={handleChange}></textarea>
        </div>

        <div>
          <label>Degree:</label>
          <select name="degree" value={formData.degree} onChange={handleChange}>
            <option value="Bsc IT">Bsc IT</option>
            <option value="Bsc SE">Bsc SE</option>
            <option value="Bsc CS">Bsc CS</option>
          </select>
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="React,JavaScript,Python,SQL"/>
        </div>
        <button type="submit">Generate CV</button>
      </form>
      <hr/>
      {cvData && (
        <div>
          <center>
            <h1>CURRICULUM CV</h1>
          </center>
          <hr/>
          <p>Name:{cvData.fullName}</p>
          <p>Email:{cvData.email}</p>
          <p>Phone:{cvData.phone}</p>
          <p>University:{cvData.university}</p>
          <h3>Objective</h3>
          <p>{cvData.objective}</p>
          <h3>Skills</h3>

          <ul>{getskillsArray(cvData.skills).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
            </ul>

            <h4>Skills Ordered List view</h4>
            <ol>
              {getskillsArray(cvData.skills).map((skill, index) =>(
                <li key={index}>{skill}</li>
              ))}
            </ol>
            <h3>Education Details</h3>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>Qualification</th>
                  <th>Institute</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cvData.degree}</td>
                  <td>{cvData.university}</td>
                  <td>2026</td>
                </tr>
              </tbody>
            </table>
        </div>
      )}
    </div>
  );
}

export default Form; 