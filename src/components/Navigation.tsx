import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-center px-2 py-4 w-full h-20 text-2xl font-bold shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <Link to="/">
        <h1>천개의 레시피</h1>
      </Link>
    </nav>
  );
}
