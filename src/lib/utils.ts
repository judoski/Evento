import clsx, { ClassValue } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { allowedCities } from './cities';
import prisma from './db';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function getEvents(city: string) {
    if (!allowedCities.includes(city)) return notFound();

    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === 'all' ? undefined : capitalize(city), // If city is 'all', we don't filter by city
        },
    });

    return events;
}

export async function getEvent(slug: string) {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    return event;
}
