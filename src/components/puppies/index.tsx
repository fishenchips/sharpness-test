import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";

export const Puppies = () => {
  const { data: puppies, isFetching } = useGetPuppies();

  console.log(puppies);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  const colors = puppies.results.map((puppey) => puppey.color);

  console.log(colors);
  return (
    <div>
      <h1>What&apos;s your favorite dog?</h1>
      {puppies.results.map((puppey) => (
        <div key={puppey.id}>
          <img src={puppey.urls.small} alt={puppey.alt_description} />
        </div>
      ))}
    </div>
  );
};
