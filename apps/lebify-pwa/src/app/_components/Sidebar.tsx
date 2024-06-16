import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="text-xl font-bold mb-8">Groovy</div>
      <nav>
        {/* <Link href="/">
          <a className="block py-2 px-4 hover:bg-gray-700">Explore</a>
        </Link>
        <Link href="/">
          <a className="block py-2 px-4 hover:bg-gray-700">Genres</a>
        </Link>
        <Link href="/">
          <a className="block py-2 px-4 hover:bg-gray-700">Album</a>
        </Link>
        <Link href="/">
          <a className="block py-2 px-4 hover:bg-gray-700">Artist</a>
        </Link>
        <Link href="/">
          <a className="block py-2 px-4 hover:bg-gray-700">Radio</a>
        </Link> */}
        <Link href="/">
          <span className="block py-2 px-4 hover:bg-gray-700">Explore</span>
        </Link>
        <Link href="/">
          <span className="block py-2 px-4 hover:bg-gray-700">Genres</span>
        </Link>
        <Link href="/">
          <span className="block py-2 px-4 hover:bg-gray-700">Album</span>
        </Link>
        <Link href="/">
          <span className="block py-2 px-4 hover:bg-gray-700">Artist</span>
        </Link>
        <Link href="/">
          <span className="block py-2 px-4 hover:bg-gray-700">Radio</span>
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;
