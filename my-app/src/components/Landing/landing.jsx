import React, { useState, useEffect } from 'react';
import "./landing.css";

export default function Landing() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // You can perform any initial data fetching or setup here if needed
    // For example, you can fetch some books when the component first loads.
    // Just make sure to update the `books` state with the fetched data.
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <section className="overflow-hidden bg-[url(https://images.pexels.com/photos/8035298/pexels-photo-8035298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            ONLINE LIBRARY
          </h2>

          <p
            className="text-center hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
          >
            Welcome to our Online Library – your gateway to a world of knowledge, imagination, and endless possibilities. Explore a vast collection of digital books, articles, and resources from the comfort of your own device. Whether you're a student, a book lover, or a lifelong learner, our online library is here to enrich your mind and fuel your curiosity. Dive into the virtual shelves, discover new worlds, and embark on a literary journey like no other. Start your exploration today!.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <li key={book.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-center">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || ''}
                  alt={`Cover of ${book.volumeInfo.title}`}
                  className="mx-auto h-40 w-32 object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">{book.volumeInfo.title}</h3>
                <p className="mt-2">{book.volumeInfo.description}</p>
                <button
                  onClick={() => addToCart(book)}
                  className="mt-2 inline-block rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-center">
        
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id} className="mt-2">
              {cartItem.volumeInfo.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
