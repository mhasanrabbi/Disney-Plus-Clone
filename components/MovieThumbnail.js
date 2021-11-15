import Image from 'next/image';
import { useRouter } from 'next/router';

function MovieThumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  return (
    <div
      className=' flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300'
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit='cover'
        className='rounded-lg'
      />

      {/* <div className='absolute top-0 left-0 bottom-4 px-6 py-4'>
        <h4>{result.title}</h4>
      </div> */}
    </div>
  );
}

export default MovieThumbnail;
