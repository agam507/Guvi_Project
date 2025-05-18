import FeedbackSummary from './FeedbackSummary';
import FeedbackList from './FeedbackList';

export default function AdminDashboard({ feedbacks, summary }) {
  return (
    <section>
      <FeedbackSummary summary={summary} />
      <FeedbackList feedbacks={feedbacks} />
    </section>
  );
}
