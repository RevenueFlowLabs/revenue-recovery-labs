import { ArrowRight, Zap, Shield, BarChart3, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <a href="/">MyApp</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Client Login
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Recover Lost Revenue with Our Expertise
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We help businesses like yours recover revenue that has been lost due to billing errors, chargebacks, and other issues.
            </p>
            <a href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
              Get Started <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
              <p className="text-gray-600 mt-2">
                Our team of experts has a proven track record of success in recovering lost revenue for our clients.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center justify-center h-16 w-16 bg-blue-500 text-white rounded-full mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Fast and Efficient</h3>
                  <p className="text-gray-600">
                    We work quickly to identify and recover your lost revenue, so you can get back to focusing on your business.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center justify-center h-16 w-16 bg-blue-500 text-white rounded-full mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Secure and Compliant</h3>
                  <p className="text-gray-600">
                    We take data security and compliance seriously, and we are fully compliant with all relevant regulations.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center justify-center h-16 w-16 bg-blue-500 text-white rounded-full mb-4">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    We have a proven track record of success, with an average recovery rate of over 90% for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; 2023 MyApp. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
