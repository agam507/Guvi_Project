import FeedbackForm from '../components/FeedbackForm';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">

      {/* Centered Card */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xl rounded-2xl shadow-lg bg-white overflow-hidden">
          {/* Card Header */}
          <div className="bg-[#1790db] p-8 pb-20 relative rounded-t-2xl">
            <div className="absolute top-8 right-8 flex gap-3">
              <button className="bg-[#0e5ba8] text-white font-semibold px-5 py-2 rounded-full shadow transition">
                Student View
              </button>
              <Link to="/admin">
                <button className="bg-blue-200 text-[#0e5ba8] font-semibold px-5 py-2 rounded-full shadow transition hover:bg-blue-300">
                  Admin Dashboard
                </button>
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mt-4 text-left ">
              Feedback<br />System
            </h1>
          </div>
          {/* Form Section */}
          <div className="px-8 py-8">
            <h2 className="text-xl font-bold mb-6 text-center">Submit Your Feedback</h2>
            <FeedbackForm />
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full text-center py-4 text-gray-400 text-sm">
        © 2025 Hackathon. All rights reserved.
      </footer>
    </div>
  );
}
