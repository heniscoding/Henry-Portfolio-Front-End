import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-lg">Sorry, we couldn’t find that page.</p>
      <Link
        to="/"
        className="mt-6 text-blue-600 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}
