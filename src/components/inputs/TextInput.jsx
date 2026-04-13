import { useId } from "react";

const TextInput = ({ label, name, value, onChange, required = false }) => {
  const id = useId();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
