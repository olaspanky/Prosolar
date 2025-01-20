'use client'
import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import Nav from "@/app/components/Nav";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/getLeads', {
          cache: 'no-store',
          headers: {
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchLeads();
  }, []);

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      header: "Name",
      accessorKey: "firstName",
      cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },
    {
      header: "Location",
      accessorKey: "address",
    },
    {
      header: "Power Needs",
      accessorKey: "powerNeeds",
      cell: ({ row }) => row.original.powerNeeds.join(", "), // Join array elements into a string
    },
    {
      header: "Payment Plan",
      accessorKey: "paymentPlan",
    },
    {
      header: "Contact Method",
      accessorKey: "contactMethod",
    },
    {
      header: "Additional Info",
      accessorKey: "more",
    },
    {
      header: "Timestamp",
      accessorKey: "createdAt",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(), // Format the date
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleDownloadCSV = () => {
    const headers = columns.map((col) => col.header).join(',');
    const rows = users
      .map((user) =>
        columns
          .map((col) => {
            if (col.accessorKey === 'timestamp') {
              return new Date(user.timestamp).toLocaleString();
            }
            return user[col.accessorKey] || '';
          })
          .join(',')
      )
      .join('\n');

    const csvContent = `${headers}\n${rows}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'user_submissions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeleteUsers = async () => {
    const selectedRows = table.getSelectedRowModel().rows;
    const selectedIds = selectedRows.map((row) => row.original._id);
  
    if (selectedIds.length === 0) {
      alert('Please select at least one user to delete.');
      return;
    }
  
    try {
      const response = await fetch('/api/deleteSubmissions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: selectedIds }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete users');
      }
  
      const result = await response.json();
  
      // Remove deleted users from the state
      setUsers((prevUsers) =>
        prevUsers.filter((user) => !selectedIds.includes(user._id))
      );
  
      alert(result.message); // Show success message
    } catch (error) {
      console.error('Error deleting users:', error);
      alert('Failed to delete users.');
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-800 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-100 flex items-center justify-center">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="p-6 bg-gray-100  flex items-center justify-center">
        <p className="text-gray-800 text-lg">No data found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Contacts Submissions</h1>
      <div className="mb-4">
        <button
          onClick={handleDownloadCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Download CSV
        </button>
        <button
          onClick={handleDeleteUsers}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 ml-4"
        >
          Delete Selected
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}