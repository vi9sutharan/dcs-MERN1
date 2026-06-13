import React, { useState } from "react";

 function SignIn () {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: '',
        city: '',
        bio: '',
        role: 'developer',
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({...prev,[name]: value}));
    };

    
    const handleSubmit = (e) => {
        e.preventDetault();
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" /> <br/>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> <br/>
            <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" /> <br/>
            <inpit name="city" value={formData.city} onChange={handleChange} placeholder="City" /> <br/>
            <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" /> <br/>
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="developer">Developer</option>
                <option value="designer">Desinger</option>
                <option value="mamager">Manager</option> 
            </select>
            <br/>
            <button type="submit">Submit</button>

        </form>
    );
 }
 export default SignIn;