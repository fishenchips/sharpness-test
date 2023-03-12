import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <Header>
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/problems/1">
            1
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/problems/2">
            2
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/problems/3">
            3
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/problems/4">
            4
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Header>
  );
};

const Header = styled.header`
  width: 70wv;
  max-height: 70px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
