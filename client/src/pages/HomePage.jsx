import FeedbackForm from '../components/Feedbackform';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <FeedbackForm />
      <Link to="/login">Admin Login</Link>
    </div>
  );
}
