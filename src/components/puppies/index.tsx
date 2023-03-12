import { Tabs, TabPanels } from "@chakra-ui/react";
import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";
import { Puppey } from "./components/puppey";
import { FaPaw } from "react-icons/fa";
import { PuppiesDiv } from "./styled";
import { PuppeyTab } from "./components/tabPanel";
import { PuppeyTabList } from "./components/tabList";
import { LoadingSpinner } from "../layout/loadingSpinner";

export const Puppies = () => {
  const { data: puppies, isFetching, error } = useGetPuppies();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Something went wrong, please try again</p>;
  }

  puppies?.results.forEach((puppey) => {
    puppey;
  });

  const brownPuppies = puppies?.results.filter(({ alt_description }) =>
    alt_description?.includes("brown")
  );

  const whitePuppies = puppies?.results.filter(({ alt_description }) =>
    alt_description?.includes("white")
  );

  const blackPuppies = puppies?.results.filter(({ alt_description }) =>
    alt_description?.includes("black")
  );

  const yellowPuppies = puppies?.results.filter(
    ({ alt_description }) =>
      alt_description?.includes("yellow") || alt_description?.includes("golden")
  );

  return (
    <PuppiesDiv>
      <h1>
        What&apos;s your favorite dog? <FaPaw />
      </h1>
      <Tabs>
        <PuppeyTabList />
        <TabPanels>
          <PuppeyTab>
            {puppies?.results.map((puppey) => (
              <Puppey
                key={puppey.id}
                img={puppey.urls.small}
                alt={puppey.alt_description}
              />
            ))}
          </PuppeyTab>
          <PuppeyTab>
            {brownPuppies?.map((puppey) => (
              <Puppey
                key={puppey.id}
                img={puppey.urls.small}
                alt={puppey.alt_description}
              />
            ))}
          </PuppeyTab>
          <PuppeyTab>
            {whitePuppies?.map((puppey) => (
              <Puppey
                key={puppey.id}
                img={puppey.urls.small}
                alt={puppey.alt_description}
              />
            ))}
          </PuppeyTab>
          <PuppeyTab>
            {blackPuppies?.map((puppey) => (
              <Puppey
                key={puppey.id}
                img={puppey.urls.small}
                alt={puppey.alt_description}
              />
            ))}
          </PuppeyTab>
          <PuppeyTab>
            {yellowPuppies?.map((puppey) => (
              <Puppey
                key={puppey.id}
                img={puppey.urls.small}
                alt={puppey.alt_description}
              />
            ))}
          </PuppeyTab>
        </TabPanels>
      </Tabs>
    </PuppiesDiv>
  );
};
