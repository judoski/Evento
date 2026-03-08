'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';

import { motion } from 'framer-motion';

const routes = [
    {
        name: 'Home',
        path: '/',
    },
    { name: 'All Events', path: '/events/all' },
];

export default function Header() {
    const activePathName = usePathname();

    return (
        <header className='flex items-center justify-between px-3 sm:px-9 border-b border-white/10 h-14'>
            <Logo />

            <nav className='h-full'>
                <ul className='flex gap-x-6 text-white/50 text-sm h-full'>
                    {routes.map(route => (
                        <li
                            key={route.path}
                            className={clsx(
                                'hover:text-white flex items-center transition relative',
                                {
                                    'text-white': activePathName === route.path,
                                }
                            )}
                        >
                            <Link href={route.path}>{route.name}</Link>

                            {activePathName === route.path && (
                                <motion.div
                                    layoutId='header-active-link'
                                    className='w-full bg-accent h-1 absolute bottom-0'
                                ></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
