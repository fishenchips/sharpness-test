import { Card, CardHeader, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  img: string;
  alt: string;
}

export const Puppey: React.FC<Props> = ({ img, alt }) => {
  return (
    <Card size="sm" align="center">
      <CardHeader>
        <Heading size="sm">
          {alt
            ? ((alt?.charAt(0).toUpperCase() + alt?.slice(1)) as string)
            : "Puppey"}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image
          boxSize="250px"
          objectFit="cover"
          src={img}
          alt={alt}
          borderRadius="sm"
        />
      </CardBody>
    </Card>
  );
};
