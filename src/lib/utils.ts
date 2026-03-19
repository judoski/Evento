import clsx, { ClassValue } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { allowedCities } from './cities';
import { TEvents } from './types';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function getEvents(city: string) {
    if (!allowedCities.includes(city)) return notFound();

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    const events: TEvents[] = await response.json();

    return events;
}

export async function getEvent(slug: string) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );

    const event: TEvents = await response.json();

    return event;
}
