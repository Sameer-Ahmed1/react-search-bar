import { useDisclosure } from "@mantine/hooks";

import { Table, Button } from "@mantine/core";
import { orderExample } from "./order";
import { useState, useEffect } from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Edit from "./components/Edit";
const App = () => {
  const [orders, setOrders] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [statusFilters, setStatusFilters] = useState([]);
  const [filterPlace, setFilterPlace] = useState("");
  const [placeFilters, setPlaceFilters] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalUser, setModalUser] = useState("");
  const [modalShipper, setModalShipper] = useState("");
  const [modalWeight, setModalWeight] = useState(0);
  const [modalCost, setModalCost] = useState(0);
  const [modalSource, setModalSource] = useState("");
  const [modalDestination, setModalDestination] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setOrders(orderExample);
  }, []);

  const filteredOrdersByStatus = statusFilters.length
    ? orders.filter((a) => statusFilters.includes(a.status))
    : orders;
  const filteredOrdersByPlace =
    filterPlace && placeFilters.length
      ? filteredOrdersByStatus.filter((a) => {
          return placeFilters.includes(a[filterPlace]);
        })
      : filteredOrdersByStatus;
  const sortedOrders =
    sortCriteria && sortOrder
      ? filteredOrdersByPlace.sort((a, b) => {
          if (!sortCriteria || !sortOrder) return 0;
          if (a[sortCriteria] < b[sortCriteria]) {
            return sortOrder === "ascending" ? -1 : 1;
          } else if (a[sortCriteria] > b[sortCriteria]) {
            return sortOrder === "ascending" ? 1 : -1;
          } else {
            return 0;
          }
        })
      : filteredOrdersByPlace;

  const modalSubmit = (event) => {
    const filtered = orders
      .filter((a, i) => i !== index)
      .concat({
        user: modalUser,
        shipper: modalShipper,
        weight: modalWeight,
        cost: modalCost,
        source: modalSource,
        destination: modalDestination,
        status: modalStatus,
      });
    setOrders(filtered);
    close();
  };
  const rows = sortedOrders.map((order, index) => (
    <tr key={`${index}`}>
      <td>{order.user}</td>
      <td>{order.shipper}</td>
      <td>{order.weight}</td>
      <td>{order.cost}</td>
      <td>{order.source}</td>
      <td>{order.destination}</td>
      <td>{order.status}</td>
      <td>
        <Button
          onClick={() => {
            open();
            setIndex(index);
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  ));
  return (
    <div>
      <Sort
        sortCriteria={sortCriteria}
        sortOrder={sortOrder}
        setSortCriteria={setSortCriteria}
        setSortOrder={setSortOrder}
      />
      <Filter
        statusFilters={statusFilters}
        setStatusFilters={setStatusFilters}
        filterPlace={filterPlace}
        setFilterPlace={setFilterPlace}
        placeFilters={placeFilters}
        setPlaceFilters={setPlaceFilters}
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
      <Edit
        modalSubmit={modalSubmit}
        opened={opened}
        close={close}
        modalUser={modalUser}
        setModalUser={setModalUser}
        modalShipper={modalShipper}
        setModalShipper={setModalShipper}
        modalWeight={modalWeight}
        setModalWeight={setModalWeight}
        modalCost={modalCost}
        setModalCost={setModalCost}
        modalSource={modalSource}
        setModalSource={setModalSource}
        modalDestination={modalDestination}
        setModalDestination={setModalDestination}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
    </div>
  );
};
export default App;
