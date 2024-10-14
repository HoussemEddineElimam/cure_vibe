"use client";
import { DataTable } from '@/components/tables/DataTable'
import { patientColumns } from '@/components/tables/patientsColumns'
import { Plus, Search } from 'lucide-react'
import React, { useState } from 'react'

const Patients = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleRowsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <div className="w-full h-full py-6 px-10">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Patients</h2> {/* Dark text for the header */}
        <button className="rounded-md flex items-center justify-center gap-2 py-2 px-4 bg-teal-500 text-white hover:bg-teal-600 transition">
          <Plus /> 
          <span>Add Patient</span>
        </button>
      </header>
      
      <div className="flex justify-between items-center mb-6">
        {/* Search bar */}
        <div className="relative w-[300px]">
          <input
            type="search"
            className="w-full h-12 pl-10 pr-4 text-md text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white" 
            placeholder="Search by name"
          />
          <Search className="absolute text-gray-500 top-3 left-3 h-5 w-5" />
        </div>
        
        {/* Dropdown for selecting rows per page */}
        <div className="flex items-center gap-4">
          <span className="text-gray-900">Rows per page:</span> {/* Darker text for the label */}
          <select
            value={rowsPerPage}
            onChange={handleRowsChange}
            className="h-10 px-3 text-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-900"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <DataTable data={[]} columns={patientColumns} />
    </div>
  );
}

export default Patients;
