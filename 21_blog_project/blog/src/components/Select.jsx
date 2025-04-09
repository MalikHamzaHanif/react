import React, { useId } from 'react';

function Select({ label, className = "", options = [], ...props }, ref) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      >
        {options.length > 0 ? (
          options.map((singleOption) => (
            <option key={singleOption} value={singleOption}>
              {singleOption}
            </option>
          ))
        ) : (
          <option disabled>No Options</option>
        )}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
