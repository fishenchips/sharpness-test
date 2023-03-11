import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { PuppiesDTO } from "../types";
import { getPuppies } from "../unsplash-queries";

const puppiesKey = "get-puppies";

export const useGetPuppies = (
  options?: UseQueryOptions<unknown, any, PuppiesDTO>
) =>
  useQuery({
    queryKey: [puppiesKey],
    queryFn: () => getPuppies(),
    ...options,
  });
