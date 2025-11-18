import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroAction } from '@/heroes/actions/search-hero-action';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {

  const [serarchParams] = useSearchParams();

  const name = serarchParams.get('name') ?? '';
  const strength = serarchParams.get('strength') ?? '';



  const {data:heroes = []} = useQuery({
    queryKey:['search', { name,strength }],
    queryFn: () =>searchHeroAction({name, strength}),
    staleTime: 1000 * 60 * 5
  }) 



  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
      
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />


      {/* mostrar los heroes */}
      <HeroGrid heroes={heroes}/>

      
    </>
  );
};

export default SearchPage;
