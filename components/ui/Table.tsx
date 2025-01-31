import React from "react";

interface TableProps {
  data: any[];
  body: any[];
}

const Table: React.FC<TableProps> = ({ data, body }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  return (
    <div className="overflow-x-auto hide-scroll border rounded-xl w-auto">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="border-b">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 whitespace-nowrap capitalize"
              >
                {key.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};

export default Table;
