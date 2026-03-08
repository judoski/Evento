import Link from 'next/link';
import Logo from './logo';

const routes = [
    {
        name: 'Home',
        path: '/',
    },
    { name: 'All Events', path: '/events/all' },
];

export default function Header() {
    return (
        <header className='flex items-center justify-between px-3 sm:px-9 border-b border-white/10 h-14'>
            <Logo />

            <nav>
                <ul className='flex gap-x-6 text-white/50 text-sm '>
                    {routes.map(route => (
                        <li
                            key={route.path}
                            className='hover:text-white transition'
                        >
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
