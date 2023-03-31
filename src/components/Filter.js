import { Checkbox } from "@mantine/core";

const Filter = ({ statusFilters, setStatusFilters }) => {
  return (
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
  );
};
export default Filter;
