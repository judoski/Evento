import EventList from '@/app/components/event-lists';
import H1 from '@/app/components/h1';
import { allowedCities } from '@/lib/cities';
import { TEvents } from '@/lib/types';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        city: string;
    };
}

export default async function EventsPage({ params }: Props) {
    const city = params.city;

    if (!allowedCities.includes(city)) return notFound();

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    const events: TEvents[] = await response.json();
    console.log(events);

    return (
        <main className='flex flex-col items-center px-[20px] py-24 min-h-[110vh]'>
            <H1 className='mb-28'>
                {city === 'all' && 'all Events'}

                {city !== 'all' &&
                    `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>

            <EventList events={events} />
        </main>
    );
}
