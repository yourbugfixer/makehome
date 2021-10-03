import React, { forwardRef } from "react";

export function jsonToArray(data) {
  let result = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      result.push(Object.values(data[i]));
    }
  }

  return result;
}

export const Label = ({ label, cName, ...rest }) => {
  return (
    <label {...rest} {...(cName ? { className: cName } : {})}>
      {label}
    </label>
  );
};

export const Input = forwardRef(
  ({ name, type = "text", cName, ...rest }, ref) => {
    return (
      <input
        type={type}
        name={name}
        id={name}
        ref={ref}
        {...rest}
        className={`form-control${cName ? " " + cName : ""}`}
      />
    );
  }
);

export const Txtarea = forwardRef(({ name, cName, ...rest }, ref) => {
  return (
    <textarea
      name={name}
      id={name}
      ref={ref}
      {...rest}
      className={`form-control${cName ? " " + cName : ""}`}
    />
  );
});

export const Select = forwardRef(({ name, cName, children, ...rest }, ref) => {
  return (
    <select
      name={name}
      id={name}
      ref={ref}
      {...rest}
      className={`form-select${cName ? " " + cName : ""}`}
    >
      {children}
    </select>
  );
});

export const Button = ({ children, pClass, ...rest }) => {
  return (
    <div className={`form-group${pClass ? " " + pClass : ""}`}>
      <button {...rest}>{children}</button>
    </div>
  );
};

export const InputCol = forwardRef(
  ({ label, name, error, helperText, classes, desc, ...rest }, ref) => {
    const { pClass, input: IP, title, error: message } = { ...classes };
    return (
      <div className={`form-group${pClass ? " " + pClass : ""}`}>
        <Label
          htmlFor={name}
          label={label}
          cName={`form-label${title ? " " + title : ""}`}
        />

        <Input name={name} ref={ref} {...rest} cName={IP} />
        {desc && (
          <>
            <small className="ms-3">{desc}</small>
            <br />
          </>
        )}

        {error && (
          <span {...(message ? { className: message } : {})}>{helperText}</span>
        )}
      </div>
    );
  }
);

export const InputRow = forwardRef(
  ({ label, name, error, helperText, screen, classes, desc, ...rest }, ref) => {
    const { pClass, input: IP, title, error: message } = { ...classes };

    if (label) {
      return (
        <div className={`form-group row${pClass ? " " + pClass : ""}`}>
          <Label
            htmlFor={name}
            label={label}
            cName={`col-sm-${screen ? screen[0] : "3"} col-form-label${
              title ? " " + title : ""
            }`}
          />
          <div className={`col-sm-${screen ? screen[1] : "9"}`}>
            <Input name={name} id={name} ref={ref} {...rest} cName={IP} />
            {desc && (
              <>
                <small className="ms-3">{desc}</small>
                <br />
              </>
            )}

            {error && (
              <span {...(message ? { className: message } : {})}>
                {helperText}
              </span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className={`form-group${pClass ? " " + pClass : ""}`}>
          <Input name={name} id={name} ref={ref} {...rest} cName={IP} />
          {desc && <small className="ms-3">{desc}</small>}

          {error && (
            <span {...(message ? { className: message } : {})}>
              {helperText}
            </span>
          )}
        </div>
      );
    }
  }
);

export const DropDown = forwardRef(
  (
    { label, name, children, error, helperText, classes, placeholder, ...rest },
    ref
  ) => {
    const { pClass, input: IP, title, error: message } = { ...classes };
    if (label) {
      return (
        <div className={`form-group${pClass ? " " + pClass : ""}`}>
          <Label
            htmlFor={name}
            label={label}
            cName={`form-label${title ? " " + title : ""}`}
          />

          <Select name={name} ref={ref} {...rest} cName={IP}>
            {placeholder ? <option value="">{placeholder}</option> : {}}
            {children}
          </Select>

          {error && (
            <span {...(message ? { className: message } : {})}>
              {helperText}
            </span>
          )}
        </div>
      );
    } else {
      return (
        <div className={`form-group${pClass ? " " + pClass : ""}`}>
          <Select name={name} ref={ref} {...rest} cName={IP}>
            {placeholder ? (
              <option value="" selected>
                {placeholder}
              </option>
            ) : (
              {}
            )}
            {children}
          </Select>

          {error && (
            <span {...(message ? { className: message } : {})}>
              {helperText}
            </span>
          )}
        </div>
      );
    }
  }
);

export const Textarea = forwardRef(
  ({ label, name, error, helperText, screen, classes, ...rest }, ref) => {
    const { pClass, input: IP, title, error: message } = { ...classes };

    if (label) {
      return (
        <div className={`form-group${pClass ? " " + pClass : ""}`}>
          <Label
            htmlFor={name}
            label={label}
            cName={`form-label${title ? " " + title : ""}`}
          />

          <Txtarea name={name} ref={ref} {...rest} cName={IP} />

          {error && (
            <span {...(message ? { className: message } : {})}>
              {helperText}
            </span>
          )}
        </div>
      );
    } else {
      return (
        <div className={`form-group${pClass ? " " + pClass : ""}`}>
          <Txtarea name={name} ref={ref} {...rest} cName={IP} />

          {error && (
            <span {...(message ? { className: message } : {})}>
              {helperText}
            </span>
          )}
        </div>
      );
    }
  }
);
