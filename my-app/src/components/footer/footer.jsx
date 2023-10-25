import React, { useState } from 'react';
import "./footer.css";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.items || []);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  }

  const truncateDescription = (description, maxLines) => {
    const lines = description.split('\n');
    if (lines.length <= maxLines) {
      return description;
    }
    return lines.slice(0, maxLines).join('\n');
  }

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div>
      <div className="bg-white p-4">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <input
              type="text"
              placeholder="Find Your Book Here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-gray-200 bg-gray-100 p-4 text-sm font-medium"
            />
            <button
              onClick={handleSearch}
              className="mt-2 px-5 py-3 bg-blue-600 rounded-full text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          {searchResults.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search Results</h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {searchResults.map((book) => (
                  <li key={book.id} className="bg-gray-100 p-4 rounded-lg">
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192.png?text=No+Image'}
                      alt={book.volumeInfo.title}
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-medium">{book.volumeInfo.title}</h3>
                    <p className="text-sm text-gray-600">
                      {showFullDescription
                        ? book.volumeInfo.description || 'No description available.'
                        : truncateDescription(book.volumeInfo.description || 'No description available.', 10)}
                      {book.volumeInfo.description && book.volumeInfo.description.split('\n').length > 10 && (
                        <span>
                          <button
                            className="text-blue-600 hover:underline cursor-pointer"
                            onClick={() => setShowFullDescription(!showFullDescription)}
                          >
                            {showFullDescription ? 'Read Less' : 'Read More'}
                          </button>
                        </span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* ... (your existing footer code) */}
        {/* <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8"> */}
    <div className="mx-auto max-w-md">
      <strong
        className="block text-center text-xl font-bold text-gray-900 sm:text-3xl"
      >
        Want us to email you with the latest blockbuster Books?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="rumitn13@gmail.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
        Have questions or need assistance? We're here to help! Feel free to reach out to our dedicated support team at any time. Whether you have inquiries about our services, suggestions for improvement, or just want to connect, don't hesitate to contact us. Your feedback is invaluable, and we look forward to hearing from you. Get in touch with us through the contact information provided below, and we'll do our best to assist you promptly
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="https://www.facebook.com/rumit.nagori/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="https://www.instagram.com/rude_rumit/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="https://github.com/ruderumit1403"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> GitHub </span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
      >
        

        <div>
          <strong className="font-medium text-gray-900"> About Us</strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                History
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-gray-900"> Support </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="mailto:rumitn13@gmail.com"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://wa.me/7300397811"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://wa.me/7300397811"
              >
                Live Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className="text-center text-xs/relaxed text-gray-500">
        © Company 2022. All rights reserved.

        <br />

        Created with
        <a
          href="https://www.linkedin.com/in/rumit-nagori/"
          className="text-gray-700 underline transition hover:text-gray-700/75"
          >Rumit Nagori</a
        >
        .
      </p>
    </div>
  </div>
      </footer>
    </div>
  );
}
