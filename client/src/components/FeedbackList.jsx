import { useEffect, useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`/feedback?search=${search}`);
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchFeedbacks(); }, [search]);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <div>
      <h2>Feedback Entries</h2>
      <button onClick={handleLogout}>Logout</button>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><br /><br />
      {feedbacks.map((fb) => (
        <div key={fb._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0' }}>
          <p><strong>Name:</strong> {fb.name}</p>
          <p><strong>Email:</strong> {fb.email}</p>
          <p><strong>Message:</strong> {fb.message}</p>
          <p><small>{new Date(fb.createdAt).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
}
