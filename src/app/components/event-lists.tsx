import { TEvents } from '@/lib/types';
import EventCard from './event-card';

interface Props {
    events: TEvents[];
}

export default function EventList({ events }: Props) {
    return (
        <section className='max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]'>
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
