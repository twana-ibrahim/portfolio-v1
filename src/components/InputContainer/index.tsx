import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label?: string;
  error?: string;
  className?: string;
};

const InputContainer = (props: Props) => {
  const { children, label, error, className } = props;

  return (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      {label ||
        (error && (
          <label className="flex items-center justify-between">
            {label && (
              <span className="flex-1 text-lg md:text-xl lg:text-lg font-medium">
                {label}
              </span>
            )}
            {error && (
              <span
                className={`text-sm lg:text-xs xl:text-sm text-red-600 ${
                  label ? "flex-none" : "flex-1"
                }`}
              >
                {error}
              </span>
            )}
          </label>
        ))}
      {children}
    </div>
  );
};
export default InputContainer;
