import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data; // should be { defaultStats, monthlyApplications }
  },
};

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  const { data, isLoading, isError, error } = useQuery(statsQuery);

  if (isLoading) return <h2>Loading stats...</h2>;
  if (isError)
    return <h2>Error: {error?.message || "Something went wrong"}</h2>;

  // safely destructure after data is available
  const { defaultStats, monthlyApplications } = data || {};

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
