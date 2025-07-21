import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
        <header className= "py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h3 className="font-bold text-2xl">
                    <Link href="/">My App</Link></h3>
                <nav>
                    <ul className="flex space-x-6">
                        <li className="hover:underline">
                            <Link href="/posts">About</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/posts">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;