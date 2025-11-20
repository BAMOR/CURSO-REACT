import { CustomPagination } from "@/components/Custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJubotron } from "@/shop/components/CustomJubotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import  { useParams } from "react-router"


export const GenderPage = () => {


const {gender} = useParams();

const genderLabel = gender ==='men'?'Hombres': gender === 'woman'?'Mujeres': 'Ninos'

  return (
        <>
        <CustomJubotron title= {`Productos para ${genderLabel}`}/>
    
        <ProductsGrid products={products}/>
        <CustomPagination totalPages={7}/>
    
    
          </>
  )
}
