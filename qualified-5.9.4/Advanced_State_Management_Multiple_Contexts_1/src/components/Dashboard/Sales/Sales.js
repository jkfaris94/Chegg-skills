import Sale from "./Sale";

function Sales({ sales }) {
  const total = sales
    .filter((sale) => sale.closed)
    .reduce((acc, sale) => acc + sale.amountInDollars, 0);
  const amount = new Intl.NumberFormat().format(total);

  const saleElements = sales.map((sale) => (
    <Sale key={sale.id} sale={sale} />
  ));

  return (
    <section>
      <h3 className="text-center">Sales</h3>
      <h4 className="sales-total text-danger-emphasis bg-danger my-3 p-4 text-center">
        Total this Month: <span className="text-light">${amount}</span>
      </h4>
      <div className="d-flex flex-wrap gap-3">{saleElements}</div>
    </section>
  );
}

export default Sales;
