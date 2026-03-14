import { TEvents } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    event: TEvents;
}

export default function EventCard({ event }: Props) {
    const date = new Date(event.date); // Convert event date to Date object
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
    const month = date.toLocaleString('en-US', { month: 'short' }); // Get abbreviated month name

    return (
        <Link
            href={`/event/${event.slug}`}
            className='flex-1 basis-80 h-[380px] max-w-[500px]'
        >
            <section className='flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden relative hover:scale-105 transition active:scale-[1.02]'>
                <Image
                    src={event.imageUrl}
                    alt={event.name}
                    width={500}
                    height={200}
                    className='h-[60%] object-fit'
                />
                <div className='flex flex-col items-center justify-center flex-1'>
                    <h2 className='text-2xl font-semibold'>{event.name}</h2>
                    <p className='italic text-white/75'>
                        {event.organizerName}
                    </p>
                    <p className='text-sm text-white/50 mt-4'>
                        {event.location}
                    </p>
                </div>
                <section className='flex flex-col justify-center items-center absolute top-[12px] left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md'>
                    <p className='text-xl font-bold -mb-[5px]'>{day}</p>
                    <p className='text-accent text-xs uppercase'>{month}</p>
                </section>
            </section>
        </Link>
    );
}
