import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1> Salman Shaikh</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/sallu">Salman Listing</Link>
    </nav>
  );
}

export default Navbar;
