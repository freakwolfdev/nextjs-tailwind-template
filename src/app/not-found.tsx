import Link from 'next/link';
import { pagesPath } from '@/lib/$path';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-6xl text-red-400">404</h1>
        <p className="mb-8 text-2xl text-gray-300">Page Not Found</p>
        <Link
          href={pagesPath.$url().path}
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
