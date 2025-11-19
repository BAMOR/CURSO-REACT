import { CustomPagination } from "@/components/Custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJubotron } from "@/shop/components/CustomJubotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"



export const HomePage = () => {
  return (
    <>
    <CustomJubotron title="Todos los productos"/>

    <ProductsGrid products={products}/>
    <CustomPagination totalPages={7}/>


      </>
  )
}
