import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold text-primary hover:text-indigo-700 transition">
            Hackathon Feedback
          </Link>
          {/* Example nav, extend as needed */}
          <nav className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link to="/admin" className="text-gray-600 hover:text-primary">Admin</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
