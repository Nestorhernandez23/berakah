import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900";
      case "ghost":
        return "hover:bg-gray-100 text-gray-900 border-none";
      case "link":
        return "text-blue-500 underline-offset-4 hover:underline border-none bg-transparent";
      case "default":
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
