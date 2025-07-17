import { useState } from 'react';
import axios from '../api';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name || !form.email || !form.message) {
      setError('All fields are required');
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError('Invalid email');
      return;
    }
    try {
      await axios.post('/feedback', form);
      setSuccess('Feedback submitted!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      /><br />
      <textarea
        placeholder="Your Feedback"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></textarea><br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
