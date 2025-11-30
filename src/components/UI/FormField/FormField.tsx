import type { FC, ReactNode } from "react";
import "./FormField.scss";

interface IFormFieldProps {
  label?: string;
  children: ReactNode;
  errorMessage?: string;
  className?: string;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  errorMessage,
  className = "",
}) => {
  const classes = [
    className,
    "form-field",

  ].filter(Boolean).join(" ");
  return (
    <>
      <label className={classes.trim()}>
        <span className="form-field__label"></span>
        {children}
        {errorMessage && (
          <span className="form-field__error-text">{errorMessage}</span>
        )}
      </label>
    </>
  );
};
