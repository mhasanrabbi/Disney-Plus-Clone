// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());
// function TrendingData() {
//   const { data, error } = useSWR(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
//     fetcher
//   );

//   if (error) return 'An error has occured';
//   if (!data) return 'Loading...';
//   console.log(data.results);
//   return <></>;
// }

// export default TrendingData;
