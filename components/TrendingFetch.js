import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function TrendingData() {
  const { data: trending, error } = useSWR(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
    fetcher
  );

  if (error) return 'An error has occured';
  if (!trending) return 'Loading...';
  console.log(trending.results);
  return <></>;
}

export default TrendingData;
