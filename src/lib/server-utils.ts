import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { allowedCities } from './cities';
import prisma from './db';
import { capitalize } from './utils';

export const getEvents = unstable_cache(async (city: string, page = 1) => {
    if (!allowedCities.includes(city)) return notFound();

    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === 'all' ? undefined : capitalize(city), // If city is 'all', we don't filter by city
        },
        orderBy: {
            date: 'asc',
        },
        take: 6,
        skip: (page - 1) * 6,
    });

    let totalCount;
    if (city === 'all') {
        totalCount = await prisma.eventoEvent.count();
    } else {
        totalCount = await prisma.eventoEvent.count({
            where: {
                city: capitalize(city),
            },
        });
    }

    return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    if (!event) return notFound();

    return event;
});
