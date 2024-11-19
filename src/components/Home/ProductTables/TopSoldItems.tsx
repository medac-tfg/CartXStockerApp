import { useTopSoldItems } from "../../../api/hooks/useTopSoldItems";
import ProductTable from "./ProductTable/ProductTable";

const TopSoldItems = () => {
  const { data } = useTopSoldItems();

  return <ProductTable title="Top Sold Items" productList={data || []} />;
};

export default TopSoldItems;
