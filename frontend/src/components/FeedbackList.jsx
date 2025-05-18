import SentimentBadge from './SentimentBadge';

export default function FeedbackList({ feedbacks }) {
  if (!feedbacks || !feedbacks.length) {
    return <p className="text-gray-500">No feedback yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {feedbacks.map((fb, i) => (
        <li
          key={i}
          className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:items-center justify-between"
        >
          <div>
            <div className="font-semibold text-primary">{fb.event}</div>
            <div className="text-gray-700">{fb.feedback}</div>
            <div className="text-xs text-gray-400">By: {fb.name || 'Anonymous'}</div>
          </div>
          <SentimentBadge sentiment={fb.sentiment} />
        </li>
      ))}
    </ul>
  );
}
