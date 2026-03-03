
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/">MyApp</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Client Login
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Your privacy policy.
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">MyApp</h3>
              <p className="text-sm text-gray-400">© 2024. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/signup" className="hover:text-gray-300">Signup</Link>
              <Link href="/admin" className="hover:text-gray-300">Admin Login</Link>
              <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
              <Link href="/billing" className="hover:text-gray-300">Payment</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
