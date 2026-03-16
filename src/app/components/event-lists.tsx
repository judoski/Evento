import { allowedCities } from '@/lib/cities';
import { TEvents } from '@/lib/types';
import { notFound } from 'next/navigation';
import EventCard from './event-card';

interface Props {
    city: string;
}

export default async function EventList({ city }: Props) {
    if (!allowedCities.includes(city)) return notFound();

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    const events: TEvents[] = await response.json();

    return (
        <section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
