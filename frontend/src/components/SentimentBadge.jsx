export default function SentimentBadge({ sentiment }) {
  let color = 'bg-gray-200 text-gray-700';
  if (sentiment === 'positive') color = 'bg-green-100 text-green-700';
  else if (sentiment === 'negative') color = 'bg-red-100 text-red-700';
  else if (sentiment === 'neutral') color = 'bg-yellow-100 text-yellow-700';

  return (
    <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${color}`}>
      {sentiment ? sentiment.charAt(0).toUpperCase() + sentiment.slice(1) : 'Unknown'}
    </span>
  );
}
