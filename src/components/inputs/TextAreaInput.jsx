import { useId } from "react";

const TextAreaInput = ({ label, name, value, onChange, required = false }) => {
  const id = useId();

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
