import fakeData from "../data.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "first_name",
      },
      {
        Header: "P",
        accessor: "last_name",
      },
      {
        Header: "W",
        accessor: "email",
      },
      {
        Header: "L",
        accessor: "gender",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="bg-white text-primary-color mt-10 pl-5 pt-5 pb-5 rounded-xl">
      <h1>IPL STATS</h1>
      <div className="">
        <table {...getTableProps()}>
          <thead className="">
            {headerGroups.map((headerGroup) => (
              <tr  {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="pr-10 " {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="pr-10 font-semibold text-lg" {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="pr-10" {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;