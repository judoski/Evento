import Link from 'next/link';

export default function Footer() {
    const routes = [
        {
            name: 'Terms & Conditions',
            path: '/terms-conditions',
        },
        {
            name: 'Privacy Policy',
            path: '/privacy-policy',
        },
    ];

    return (
        <footer className='flex items-center justify-between mt-auto h-16 border-t border-white/50 px-3 sm:px-9 text-white/25'>
            <small className='text-xs'>
                {' '}
                &copy;Judoski. All rights reserved
            </small>

            <ul className='flex gap-x-3 sm:gap-x-8'>
                {routes.map(route => (
                    <li
                        key={route.name}
                        className='text-sm text-white/25 hover:text-white transition'
                    >
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
