import { useContext } from "react";
import Sale from "./Sale";
import { SalesContext } from "../../../contexts/SalesContext";

function Sales() {
  const { sales, setSales } = useContext(SalesContext);
  const total = sales
    .filter((sale) => sale.closed)
    .reduce((acc, sale) => acc + sale.amountInDollars, 0);
  const amount = new Intl.NumberFormat().format(total);

  const updateSale = (sale) => {
    const index = sales.findIndex((el) => el.id === sale.id);
    setSales([
      ...sales.slice(0, index),
      { ...sale, closed: !sale.closed },
      ...sales.slice(index + 1),
    ]);
  };
  const saleElements = sales.map((sale) => (
    <Sale key={sale.id} sale={sale} updateSale={updateSale} />
  ));

  return (
    <section id="sales">
      <h3 className="text-center">Sales</h3>
      <h4 className="sales-total text-danger-emphasis bg-danger my-3 p-4 text-center">
        Total this Month: <span className="text-light">${amount}</span>
      </h4>
      <div className="d-flex flex-wrap gap-3">{saleElements}</div>
    </section>
  );
}

export default Sales;
