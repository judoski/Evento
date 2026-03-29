import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import z from 'zod';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const pageNumberSchema = z.coerce.number().int().positive().optional();
