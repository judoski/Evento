import { TEvents } from '@/lib/types';
import EventCard from './event-card';

interface Props {
    events: TEvents[];
}

export default function EventList({ events }: Props) {
    return (
        <section>
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
