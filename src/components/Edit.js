import "../App.css";
import { Modal, Select } from "@mantine/core";

const Edit = ({
  modalSubmit,
  opened,
  close,
  modalUser,
  setModalUser,
  modalShipper,
  setModalShipper,
  modalWeight,
  setModalWeight,
  modalCost,
  setModalCost,
  modalSource,
  setModalSource,
  modalDestination,
  setModalDestination,
  modalStatus,
  setModalStatus,
}) => (
  <Modal opened={opened} onClose={close} title="Edit details" centered>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        modalSubmit();
      }}
    >
      <div className="modal">
        User :{" "}
        <input
          type="text"
          placeholder="user"
          value={modalUser}
          onChange={(e) => setModalUser(e.target.value)}
        />
        Shipper :{" "}
        <input
          type="text"
          placeholder="shipper"
          value={modalShipper}
          onChange={(e) => setModalShipper(e.target.value)}
        />
        Weight :{" "}
        <input
          type="number"
          placeholder="weight"
          value={modalWeight}
          onChange={(e) => setModalWeight(e.target.value)}
        />
        Cost :{" "}
        <input
          type="number"
          placeholder="cost"
          value={modalCost}
          onChange={(e) => setModalCost(e.target.value)}
        />
        <Select
          label="Source"
          placeholder="Pick one"
          data={[
            { value: "hyderabad", label: "Hyderabad" },
            { value: "mumbai", label: "Mumbai" },
            { value: "goa", label: "Goa" },
            { value: "bangalore", label: "Bangalore" },
          ]}
          value={modalSource}
          onChange={setModalSource}
        />
        <Select
          label="Destination"
          placeholder="Pick one"
          data={[
            { value: "hyderabad", label: "Hyderabad" },
            { value: "mumbai", label: "Mumbai" },
            { value: "goa", label: "Goa" },
            { value: "bangalore", label: "Bangalore" },
          ]}
          value={modalDestination}
          onChange={setModalDestination}
        />
        <Select
          label="Status"
          placeholder="Pick one"
          data={[
            { value: "out-for-delivery", label: "Out for delivery" },
            { value: "delivered", label: "Delivered" },
          ]}
          value={modalStatus}
          onChange={setModalStatus}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  </Modal>
);

export default Edit;
