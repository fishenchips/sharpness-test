import { Card, CardHeader, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  img: string;
  alt: string;
}

export const Puppey: React.FC<Props> = ({ img, alt }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>
      <CardBody>
        <Image src={img} alt={alt} borderRadius="lg" />
      </CardBody>
    </Card>
  );
};
