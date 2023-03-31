import { Table, Select } from "@mantine/core";
import { orderExample } from "./order";
import { useState, useEffect } from "react";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    setOrders(orderExample);
  }, []);
  const sortedOrders =
    sortCriteria && sortOrder
      ? orders.sort((a, b) => {
          if (!sortCriteria || !sortOrder) return 0;
          if (a[sortCriteria] < b[sortCriteria]) {
            return sortOrder === "ascending" ? -1 : 1;
          } else if (a[sortCriteria] > b[sortCriteria]) {
            return sortOrder === "ascending" ? 1 : -1;
          } else {
            return 0;
          }
        })
      : orders;

  const rows = sortedOrders.map((order, index) => (
    <tr key={`${index}`}>
      <td>{order.user}</td>
      <td>{order.shipper}</td>
      <td>{order.weight}</td>
      <td>{order.cost}</td>
      <td>{order.source}</td>
      <td>{order.destination}</td>
      <td>{order.status}</td>
    </tr>
  ));
  return (
    <div>
      <Select
        label="Sort By"
        placeholder="Pick one"
        data={[
          { value: "cost", label: "Cost" },
          { value: "weight", label: "Weight" },
        ]}
        value={sortCriteria}
        onChange={setSortCriteria}
      />
      <Select
        placeholder="Pick one"
        data={[
          { value: "ascending", label: "Ascending" },
          { value: "descending", label: "Descending" },
        ]}
        value={sortOrder}
        onChange={setSortOrder}
      />
      <Table withBorder highlightOnHover>
        <thead>
          <tr>
            <th>User</th>
            <th>Shipper</th>
            <th>Weight</th>
            <th>Cost</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
export default App;
