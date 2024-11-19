import ProductTable from "./ProductTable/ProductTable";
import { useLastStoredProducts } from "../../../api/hooks/useLastStoredProducts";

const LastStoredProducts = () => {
  const { data } = useLastStoredProducts();

  return <ProductTable title="Last Stored Products" productList={data || []} />;
};

export default LastStoredProducts;
