"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadget";
import { AppointmentModel } from "@/models/AppointmentModel";
import { UserModel } from "@/models/UserModel";

export const patientColumns: ColumnDef<UserModel>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "fullname",
    header: "Patient",
    cell: ({ row }) => {
      const patient = row.original;
      return <p className="text-14-medium ">{patient.fullname}</p>;
    },
  },
  {
    accessorKey:"createdAt",
    header: "Created At",
    cell: ({ row }) => {
        const patient = row.original as UserModel;
        return <p className="text-14-medium ">{formatDateTime(patient.createdAt).dateDay}</p>;
  }
    },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <div className="flex gap-1">
          
        </div>
      );
    },
  },
];