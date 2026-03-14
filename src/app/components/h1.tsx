import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function H1({ children, className }: Props) {
    return (
        <h1
            className={cn(
                'font-bold text-3xl lg:text-6xl tracking-tight',
                className
            )}
        >
            {children}
        </h1>
    );
}
