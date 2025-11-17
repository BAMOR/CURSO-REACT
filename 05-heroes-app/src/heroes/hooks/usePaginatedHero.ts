import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.actions";

interface Props{
    
    page: number;
    limit: number;
}


export const usePaginatedHero = ({page, limit = 6}:Props) => {


  return  useQuery({
    queryKey: ['heroes', { page, limit}],
    queryFn: ()=> getHeroesByPageAction(+page, +limit),
    staleTime: 1000*60*5
  });

}
