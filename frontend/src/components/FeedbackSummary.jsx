export default function FeedbackSummary({ summary }) {
  if (!summary) return null;

  return (
    <div className="bg-blue-50 rounded p-4 mb-6">
      <h3 className="font-bold text-lg mb-2">Feedback Summary</h3>
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold">{summary.total}</span> Total Feedback
        </div>
        <div>
          <span className="font-semibold text-green-700">{summary.positive}</span> Positive
        </div>
        <div>
          <span className="font-semibold text-yellow-700">{summary.neutral}</span> Neutral
        </div>
        <div>
          <span className="font-semibold text-red-700">{summary.negative}</span> Negative
        </div>
      </div>
      {summary.topEvent && (
        <div className="mt-2 text-sm text-gray-600">
          Most discussed: <span className="font-semibold">{summary.topEvent}</span>
        </div>
      )}
    </div>
  );
}
