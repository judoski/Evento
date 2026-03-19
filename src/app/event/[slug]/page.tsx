import H1 from '@/app/components/h1';
import { TEvents } from '@/lib/types';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );

    const event: TEvents = await response.json();

    return {
        title: `${event.name}`,
    };
}

export default async function EventPage({ params }: Props) {
    const slug = params.slug;

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );

    const event: TEvents = await response.json();
    console.log(event);

    return (
        <main>
            <section className='relative overflow-hidden flex justify-center items-center py-14 md:py-20'>
                <Image
                    className='object-cover blur-3xl z-0'
                    src={event.imageUrl}
                    alt='Event background image'
                    fill
                    sizes='(max-width: 1280px) 100vw, 1280px'
                    quality={50}
                    priority
                />

                <div className='z-1 relative flex flex-col md:flex-row gap-6 lg:gap-16'>
                    <Image
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={201}
                        className='rounded-xl object-cover border-white/50 border-2'
                    />

                    <div className='flex flex-col'>
                        <p className='text-white/75'>
                            {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>

                        <H1 className='mt-2 mb-1 lg:text-5xl'>{event.name}</H1>
                        <p className='white'>
                            Organized by{' '}
                            <span className='italic'>
                                {event.organizerName}
                            </span>
                        </p>

                        <button className='mt-5 md:mt-auto bg-white/20 capitalize w-[95vw] sm:w-full border-white/10 border-2 rounded py-2 hover:scale-105 focus:scale-[1.02] transition bg-blur'>
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
