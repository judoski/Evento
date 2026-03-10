import { TEvents } from '@/lib/types';

interface Props {
    event: TEvents;
}

export default function EventCard({ event }: Props) {
    return <section> {event.name}</section>;
}
