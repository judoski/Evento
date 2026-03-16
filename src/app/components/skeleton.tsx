import { cn } from '@/lib/utils';

interface Props {
    className: string;
}

export default function Skeleton({ className }: Props) {
    return (
        <div
            className={cn(
                'animate-pulse h-4 w-[550px] rounded-md bg-white/5',
                className
            )}
        />
    );
}
