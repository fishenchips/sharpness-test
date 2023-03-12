import { Tabs, TabPanels } from "@chakra-ui/react";
import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";
import { Puppey } from "./components/puppey";
import { FaPaw } from "react-icons/fa";
import { colorCodes } from "./utils";
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

  const brownPuppies = puppies?.results.filter(({ color }) =>
    colorCodes.brown.find((code) => color === code)
  );

  const whitePuppies = puppies?.results.filter(({ color }) =>
    colorCodes.white.find((code) => color === code)
  );

  const blackPuppies = puppies?.results.filter(({ color }) =>
    colorCodes.black.find((code) => color === code)
  );

  const otherColors = puppies?.results.filter(({ color }) =>
    colorCodes.others.find((code) => color === code)
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
            {otherColors?.map((puppey) => (
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
