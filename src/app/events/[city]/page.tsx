import H1 from '@/app/components/h1';
import { allowedCities } from '@/lib/cities';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        city: string;
    };
}

export default function EventsPage({ params }: Props) {
    const city = params.city;

    if (!allowedCities.includes(city)) return notFound();

    return (
        <main className='flex flex-col items-center px-[20px] py-24 min-h-[110vh]'>
            <H1>
                {city === 'all' && 'all Events'}

                {city !== 'all' &&
                    `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>
        </main>
    );
}
