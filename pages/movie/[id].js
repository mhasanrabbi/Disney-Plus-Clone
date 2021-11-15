import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Image from 'next/image';

function Movie({ result }) {
  const [session] = useSession();
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section>
          <div className='relative min-h-[(100vh-72px)]'>
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                {result.title || result.original_name}
              </h1>
              <div className='flex items-center space-x-3 md:space-x-5'>
                <button className='text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]'>
                  <img
                    src='/images/play-icon-black.svg'
                    alt=''
                    className='h-6 md:h-8'
                  />
                  <span className='uppercase font-medium tracking-wide'>
                    Play
                  </span>
                </button>

                <button
                  className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]'
                  onClick={() => setShowPlayer(true)}
                >
                  <img
                    src='/images/play-icon-white.svg'
                    alt=''
                    className='h-6 md:h-8'
                  />
                  <span className='uppercase font-medium tracking-wide'>
                    Trailer
                  </span>
                </button>

                <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60'>
                  <img src='/images/group-icon.svg' alt='' />
                </div>
                <p className='text-xs md:text-sm'>
                  {result.release_date || result.first_air_date} •{' '}
                  {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
                  {result.genres.map((genre) => genre.name + ' ')}{' '}
                </p>
                <h4 className='text-sm md:text-lg max-w-4xl'>
                  {result.overview}
                </h4>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const req = await fetch(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then(
    (res) => res.json()
  );

  return {
    props: {
      session,
      result: req,
    },
  };
}
