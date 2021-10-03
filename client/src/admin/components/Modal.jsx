import React from "react";

export function Modal({ id, title, header, footer, children }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-slideout" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fal fa-chevron-circle-left"></i>
              </button>

              {title && <h5 className="modal-title">{title}</h5>}
              {header && (
                <div className="d-flex align-items-center justify-content-between w-100 ms-3">
                  {header}
                </div>
              )}
            </div>
          </div>
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export function ModalHeader({ title, children, ...rest }) {
  return (
    <div className="modal-header">
      <div className="d-flex align-items-center">
        <div>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fal fa-chevron-circle-left"></i>
          </button>
        </div>

        {title && <h5 className="modal-title">{title}</h5>}
        {children}
      </div>
    </div>
  );
}

export const ModalButton = ({ id, text, children, ...rest }) => {
  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target={`#${id}`}
      {...rest}
    >
      {(text && text) || (children && children)}
    </button>
  );
};
