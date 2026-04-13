import { useId } from "react";

const SelectInput = ({ label, name, value, onChange, options = [] }) => {
  const id = useId();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>

      <select
        id={id}
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
