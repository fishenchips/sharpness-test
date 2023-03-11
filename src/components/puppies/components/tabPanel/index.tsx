import { TabPanel, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PuppeyTab: React.FC<Props> = ({ children }) => {
  return (
    <TabPanel>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {children}
      </SimpleGrid>
    </TabPanel>
  );
};
