import { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackSummary from '../components/FeedbackSummary';

export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  const analyzeSentiment = (text) => {
    if (text.includes('good') || text.includes('great')) return 'positive';
    if (text.includes('bad') || text.includes('poor')) return 'negative';
    return 'neutral';
  };

  const handleFeedbackSubmit = async ({ name, event, feedback }) => {
    const sentiment = analyzeSentiment(feedback);
    setFeedbacks([
      ...feedbacks,
      { name, event, feedback, sentiment }
    ]);
    alert('Thank you for your feedback!');
  };

  // Calculate summary
  const summary = {
    total: feedbacks.length,
    positive: feedbacks.filter(fb => fb.sentiment === 'positive').length,
    neutral: feedbacks.filter(fb => fb.sentiment === 'neutral').length,
    negative: feedbacks.filter(fb => fb.sentiment === 'negative').length,
    topEvent: feedbacks.length
      ? Object.entries(feedbacks.reduce((acc, fb) => {
          acc[fb.event] = (acc[fb.event] || 0) + 1;
          return acc;
        }, {})).sort((a, b) => b[1] - a[1])[0][0]
      : null
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-primary">Submit Feedback</h1>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackSummary summary={summary} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
