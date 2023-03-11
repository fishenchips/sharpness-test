import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getPuppies } from "../unsplash-queries";

const puppiesKey = "get-puppies";

export const useGetPuppies = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: [puppiesKey],
    queryFn: () => getPuppies(),
    ...options,
  });
