import React from "react";
import { Table } from "antd";
import { FormatRupiah } from "@arismun/format-rupiah";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    render: (date) => {
      const dateIso = new Date(date);
      return (
        <>
          {dateIso.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </>
      );
    },
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "From",
    dataIndex: "from",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (amount) => (
      <p className={`${amount > 0 ? "text-green-500" : "text-red-500"}`}>
        {amount > 0 ? "+" : ""}
        <FormatRupiah value={amount} />
      </p>
    ),
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const TableRakamin = ({ transactions }) => (
  <>
    <Table
      columns={columns}
      dataSource={transactions}
      onChange={onChange}
      className="mt-[50px]"
    />
  </>
);
export default TableRakamin;
