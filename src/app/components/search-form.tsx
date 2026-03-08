'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
    const [searchText, setSearchText] = useState('');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const query = searchText.trim();
        if (!query) return;

        router.push(`/events/${query}`);
    };

    return (
        <form onSubmit={handleSubmit} className='w-full sm:w-[580px]'>
            <input
                className='outline-none px-6 w-full h-16 rounded-lg  bg-white/[7%] ring-accent/50 focus:bg-white/10 focus:ring-2 transition '
                placeholder='Search events in any city...'
                spellCheck='false'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
        </form>
    );
}
