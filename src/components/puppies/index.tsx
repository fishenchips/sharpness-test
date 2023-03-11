import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";
import { Puppey } from "./components/Puppey";

export const Puppies = () => {
  const { data: puppies, isFetching, error } = useGetPuppies();

  console.log(puppies);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong, please try again</p>;
  }

  const colors = puppies?.results.map((puppey) => puppey.color);

  console.log(colors);
  return (
    <div>
      <h1>What&apos;s your favorite dog?</h1>
      {puppies?.results.map((puppey) => (
        <Puppey
          key={puppey.id}
          img={puppey.urls.small}
          alt={puppey.alt_description}
        />
      ))}
    </div>
  );
};
