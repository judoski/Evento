import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className='flex flex-col min-h-screen max-w-7xl mx-auto bg-white/[2%]'>
            {children}
        </div>
    );
}
