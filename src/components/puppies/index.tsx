import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";
import { Puppey } from "./components/Puppey";
import styled from "styled-components";
import { SimpleGrid } from "@chakra-ui/react";

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
    <PuppiesDiv>
      <h1>What&apos;s your favorite dog?</h1>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {puppies?.results.map((puppey) => (
          <Puppey
            key={puppey.id}
            img={puppey.urls.small}
            alt={puppey.alt_description}
          />
        ))}
      </SimpleGrid>
    </PuppiesDiv>
  );
};

const PuppiesDiv = styled.div`
  width: 70vw;
  margin: 0 auto;
  border: 1px solid blue;
  text-align: center;
`;
