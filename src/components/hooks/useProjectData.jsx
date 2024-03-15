import { useQuery } from "@tanstack/react-query";

const useProjectData = () => {
  const {data:projects,refetch,isLoading} = useQuery({
    queryKey:["Projects"],
    queryFn: async() =>{
        const response = await fetch("http://localhost:5000/datas");
        const projects = await response.json();
        return projects;
    }
  })
  return [projects,refetch,isLoading]
};

export default useProjectData;