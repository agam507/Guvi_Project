import { useState } from 'react';
import FeedbackSummary from '../components/FeedbackSummary';
import FeedbackList from '../components/FeedbackList';

function getSummary(feedbacks) {
  const summary = {
    total: feedbacks.length,
    positive: feedbacks.filter(fb => fb.sentiment === 'positive').length,
    neutral: feedbacks.filter(fb => fb.sentiment === 'neutral').length,
    negative: feedbacks.filter(fb => fb.sentiment === 'negative').length,
    topEvent: null
  };
  if (feedbacks.length) {
    const eventCounts = {};
    feedbacks.forEach(fb => {
      eventCounts[fb.event] = (eventCounts[fb.event] || 0) + 1;
    });
    summary.topEvent = Object.entries(eventCounts).sort((a, b) => b[1] - a[1])[0][0];
  }
  return summary;
}

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState([]); // Start empty!
  const summary = getSummary(feedbacks);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">Admin Dashboard</h1>
      <FeedbackSummary summary={summary} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">All Feedback</h2>
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}
