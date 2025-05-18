import { useState } from 'react';

export default function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Event');
  const [title, setTitle] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (onSubmit) {
      await onSubmit({ name, type, title, feedback });
    }
    setLoading(false);
    setName('');
    setType('Event');
    setTitle('');
    setFeedback('');
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold text-[#1790db] mb-1">
          Your Name:
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1790db] transition"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold text-[#1790db] mb-1">
          Feedback Type:
        </label>
        <select
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1790db] transition"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="Event">Event</option>
          <option value="Club">Club</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold text-[#1790db] mb-1">
          Title:
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1790db] transition"
          placeholder="Event or Club name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold text-[#1790db] mb-1">
          Feedback:
        </label>
        <textarea
          className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1790db] transition"
          placeholder="Write your feedback here..."
          rows={4}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1790db] hover:bg-[#0e5ba8] text-white font-bold py-2 rounded-full shadow-lg transition text-lg"
      >
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </form>
  );
}
