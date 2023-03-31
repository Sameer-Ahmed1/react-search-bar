import { Checkbox, Select } from "@mantine/core";

const Filter = ({
  statusFilters,
  setStatusFilters,
  filterPlace,
  setFilterPlace,
  placeFilters,
  setPlaceFilters,
}) => {
  return (
    <div>
      <div>
        Filter By
        <Checkbox.Group
          label="Status"
          value={statusFilters}
          onChange={setStatusFilters}
        >
          <Checkbox value="out-for-delivery" label="Out for delivery" />
          <Checkbox value="delivered" label="Delivered" />
        </Checkbox.Group>
      </div>
      <div>
        Filter By
        <Select
          label="Place"
          placeholder="Pick one"
          data={[
            { value: "source", label: "Source" },
            { value: "destination", label: "Destination" },
          ]}
          value={filterPlace}
          onChange={setFilterPlace}
        />
        <Checkbox.Group
          //   label="Status"
          value={placeFilters}
          onChange={setPlaceFilters}
        >
          <Checkbox value="hyderabad" label="Hyderabad" />
          <Checkbox value="bangalore" label="Bangalore" />
          <Checkbox value="mumbai" label="Mumbai" />
          <Checkbox value="goa" label="Goa" />
        </Checkbox.Group>
      </div>
    </div>
  );
};
export default Filter;
