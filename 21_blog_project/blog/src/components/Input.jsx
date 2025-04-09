import React, { useId } from 'react';

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
