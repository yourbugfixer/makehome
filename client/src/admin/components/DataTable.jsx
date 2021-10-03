import React from "react";
import { selectAll } from "../../utils/Utility";

function DataTable({
  data,
  checkbox = false,
  header,
  children,
  classes,
  ...rest
}) {
  const cname = `table text-center table-hover${classes ? " " + classes : ""}`;
  return (
    <table className={cname} {...rest}>
      <thead>
        <tr>
          {checkbox && (
            <th scope="col">
              <label className="control_checkbox">
                <input
                  type="checkbox"
                  className="js-check-all"
                  onChange={(e) => selectAll(e)}
                />
              </label>
            </th>
          )}
          {header &&
            header.map((item) => (
              <th scope="col" key={item}>
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {children}
        {/* {data.map((body, index) => (
          <tr key={index}>
            {checkbox && body.Name !== "" && (
              <th scope="row">
                <label className="control_checkbox">
                  <input type="checkbox" />
                </label>
              </th>
            )}
            {header &&
              header.map((key) => <td key={body[key]}>{body[key]}</td>)}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

export const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DataTable;
