import { useGetPuppies } from "@/queries/unsplash/hooks/useGetPuppies";

const Problem3 = () => {
  const { data } = useGetPuppies();

  console.log(data);

  return <></>;
};

export default Problem3;
