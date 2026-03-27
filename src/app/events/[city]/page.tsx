import EventList from '@/app/components/event-lists';
import H1 from '@/app/components/h1';
import { capitalize, pageNumberSchema } from '@/lib/utils';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

interface Props {
    params: {
        city: string;
    };
}

interface EventPageProps extends Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({ params }: Props): Metadata {
    const city = params.city;
    return {
        title: city === 'all' ? 'All Events' : `Events in ${city}`,
    };
}

export default async function EventsPage({
    params,
    searchParams,
}: EventPageProps) {
    const city = params.city;
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);

    if (!parsedPage.success) {
        throw new Error('Invalid page number');
    }

    return (
        <main className='flex flex-col items-center px-[20px] py-24 min-h-[110vh]'>
            <H1 className='mb-28'>
                {city === 'all' && 'all Events'}

                {city !== 'all' && `Events in ${capitalize(city)}`}
            </H1>

            <Suspense key={city + parsedPage.data} fallback={<Loading />}>
                <EventList city={city} page={parsedPage.data} />
            </Suspense>
        </main>
    );
}
