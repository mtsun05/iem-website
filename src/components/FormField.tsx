interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  required?: boolean;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = true,
  options = [],
}) => {
  if (type === "textarea") {
    return (
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-white/50 transition duration-200 h-38 resize-none"
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        <div className="relative">
          <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring focus:ring-white/50 transition duration-200 appearance-none"
          >
            <option value="" disabled>
              Select a {label.toLowerCase()}...
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block ml-0 text-sm font-medium text-gray-300 mb-2"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-white/50 transition duration-200"
        placeholder={`Enter your ${label.toLowerCase()}...`}
      />
    </div>
  );
};

export default FormField;
