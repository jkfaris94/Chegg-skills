import { useContext, useState } from "react";
import { SalesContext } from "../../../contexts/SalesContext";

function ContractOptions({ call, company, updateCall }) {
  const { sales, setSales } = useContext(SalesContext);
  const [amount, setAmount] = useState(0);

  // Return early if a sale already exists
  if (call.saleId) {
    return (
      <p className="mb-0 text-success-emphasis fw-bold">Contract started!</p>
    );
  }

  // Form handling
  const handleChange = (event) => setAmount(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    const amountInDollars = Number(amount);
    if (!amountInDollars) return;

    const newSale = {
      id: sales.length + 1,
      company,
      amountInDollars,
      closed: false,
    };

    setSales([newSale, ...sales]);
    updateCall(call, newSale.id);
  };

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <label htmlFor="amount" className="form-label">
        Amount in Dollars
      </label>
      <input
        id="amount"
        className="form-control"
        type="number"
        onChange={handleChange}
        value={amount}
      />
      <button className="mt-3 btn btn-success btn-sm" type="submit">
        Create Contract
      </button>
    </form>
  );
}

export default ContractOptions;
