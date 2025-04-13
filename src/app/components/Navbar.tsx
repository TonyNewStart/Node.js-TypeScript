'use client';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-black-600">
            My Site
          </div>
          <div className="space-x-6 hidden sm:flex">
            <a href="/" className="text-gray-700 hover:text-blue-500 transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}