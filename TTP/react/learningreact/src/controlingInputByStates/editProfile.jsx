import { useState, useRef } from "react";
export default function EditProfile() {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const [name, setName] = useState({
    firstName: { name: "s", isEdit: true },
    lastName: { name: "s", isEdit: true },
  });
  const toggleEditMode = (nametype) => {
    setName({
      ...name,
      [nametype]: { ...name[nametype], isEdit: !name[nametype].isEdit },
    });
    if (
      nametype === "firstName" &&
      firstNameInput.current &&
      !name[nametype].isEdit
    ) {
      firstNameInput.current.focus();
    } else if (
      nametype === "lastName" &&
      lastNameInput.current &&
      !name[nametype].isEdit
    ) {
      lastNameInput.current.focus();
    }
  };
  return (
    <form>
      <label>
        First name:{" "}
        {name.firstName.isEdit ? (
          <input
            ref={firstNameInput}
            value={name.firstName.name}
            onChange={(e) => {
              setName((prev) => ({
                ...prev,
                firstName: {
                  ...prev.firstName,
                  name: e.target.value,
                },
              }));
            }}
          />
        ) : (
          <div>{name.firstName.name}</div>
        )}
      </label>
      <label>
        Last name:{" "}
        {name.lastName.isEdit ? (
          <input
            ref={lastNameInput}
            value={name.lastName.name}
            onChange={(e) => {
              setName((prev) => ({
                ...prev,
                lastName: {
                  ...prev.lastName,
                  name: e.target.value,
                },
              }));
            }}
          />
        ) : (
          <div>{name.lastName.name}</div>
        )}
      </label>
      <button type="button" onClick={() => toggleEditMode("firstName")}>
        {name.firstName.isEdit ? "complete" : "editFirstName"}
      </button>
      <button type="button" onClick={() => toggleEditMode("lastName")}>
        {name.lastName.isEdit ? "complete" : "editLastName"}
      </button>
      <p>
        <i>{name.firstName.name + name.lastName.name}</i>
      </p>
    </form>
  );
}
