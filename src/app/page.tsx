import Link from 'next/link';

export default function Home() {
    return (
        <main className='flex flex-col items-center pt-36 px-3'>
            <h1 className='font-bold text-3xl lg:text-6xl tracking-tight'>
                Find events around you
            </h1>

            <p className='opacity-75 text-2xl lg:text-3xl mt-7 mb-12'>
                Browse more than{' '}
                <span className='italic underline text-[#a4f839] font-bold'>
                    10,000 events
                </span>{' '}
                around you
            </p>

            <form className='w-full sm:w-[580px]'>
                <input
                    className='outline-none px-6 w-full h-16 rounded-lg  bg-white/[7%] ring-[#a4f839]/50 focus:bg-white/10 focus:ring-2 transition '
                    placeholder='Search events in any city...'
                    spellCheck='false'
                />
            </form>

            <section className='flex items-center mt-4 gap-x-4 text-sm text-white/50'>
                <p>Popular:</p>

                <div className='space-x-2 font-semibold'>
                    <Link href='/events/austin'>Austin</Link>
                    <Link href='/events/seattle'>Seattle</Link>
                </div>
            </section>
        </main>
    );
}
