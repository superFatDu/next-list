import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/avatar.jpg" alt="avatar" width={48} height={48} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/mutu"><a>MUTU</a></Link>
    </nav>
  );
}

export default Navbar;