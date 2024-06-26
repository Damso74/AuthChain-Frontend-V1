import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Contact.css'; // Assurez-vous que le fichier CSS correspondant est bien présent

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for contacting us. We will get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>This form is not connected, so your messages will not be received. Please contact us through LinkedIn:</p>
      <p><a href="https://www.linkedin.com/in/damien-credoz/" target="_blank" rel="noopener noreferrer">Damien Credoz on LinkedIn</a></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
