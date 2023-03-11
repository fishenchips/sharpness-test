import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";
import { Puppey } from "./components/Puppey";
import styled from "styled-components";
import { SimpleGrid } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

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

  /* This filtering doesn't work very well as a gray color displays a black puppey */

  const brownPuppies = puppies?.results.filter(
    ({ color }) =>
      color === "#a68c73" ||
      color === "#8c7359" ||
      color === "#8c730c" ||
      color === "#d9c0a6" ||
      color === "#c08c73" ||
      color === "#408cc0" //blue color, for the background
  );

  const whitePuppies = puppies?.results.filter(
    ({ color }) => color === "#f3f3d9"
  );
  console.log({ whitePuppies });

  const blackPuppies = puppies?.results.filter(
    ({ color }) =>
      color === "#262626" ||
      color === "#0c260c" ||
      color === "#a6a6a6" ||
      color === "#f3f3f3"
  );

  const otherColors = puppies?.results.filter(
    ({ color }) =>
      color === "#d9d9f3" ||
      color === "#c0c0c0" ||
      color === "#590c0c" ||
      color === "#d9c0c0" ||
      color === " #a62626" ||
      color === "#a6a6a6" ||
      color === "#737373" ||
      color === "#405926" ||
      color === "#8c8c8c" ||
      color === "#0c260c"
  );

  console.log(colors);
  return (
    <PuppiesDiv>
      <h1>
        What&apos;s your favorite dog? <FaPaw />
      </h1>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Brown</Tab>
          <Tab>White</Tab>
          <Tab>Black</Tab>
          <Tab>Others</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {brownPuppies?.map((puppey) => (
                <Puppey
                  key={puppey.id}
                  img={puppey.urls.small}
                  alt={puppey.alt_description}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {whitePuppies?.map((puppey) => (
                <Puppey
                  key={puppey.id}
                  img={puppey.urls.small}
                  alt={puppey.alt_description}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {blackPuppies?.map((puppey) => (
                <Puppey
                  key={puppey.id}
                  img={puppey.urls.small}
                  alt={puppey.alt_description}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
              {otherColors?.map((puppey) => (
                <Puppey
                  key={puppey.id}
                  img={puppey.urls.small}
                  alt={puppey.alt_description}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PuppiesDiv>
  );
};

const PuppiesDiv = styled.div`
  width: 70vw;
  margin: 0 auto;
  text-align: center;
`;
