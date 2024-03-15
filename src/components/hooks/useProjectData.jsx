import { useQuery } from "@tanstack/react-query";
import useAxiosLink from "./useAxiosLink";

const useProjectData = () => {
    const getLink = useAxiosLink();
  const {data:projects,refetch,isLoading} = useQuery({
    queryKey:["Projects"],
    queryFn: async() =>{
        const response = await getLink.get("/datas");
        return response.data;
    }
  })
  return [projects,refetch,isLoading]
};

export default useProjectData;