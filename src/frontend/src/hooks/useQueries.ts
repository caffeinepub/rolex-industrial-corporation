import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitQuote() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (params: {
      name: string;
      company: string;
      email: string;
      phone: string;
      productInterest: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitQuote(
        params.name,
        params.company,
        params.email,
        params.phone,
        params.productInterest,
        params.message,
      );
    },
  });
}

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["contactInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
