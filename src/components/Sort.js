import { Select } from "@mantine/core";
const Sort = ({ sortCriteria, setSortCriteria, sortOrder, setSortOrder }) => {
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
    </div>
  );
};

export default Sort;
