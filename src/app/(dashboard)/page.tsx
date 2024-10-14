import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import { DataTable } from "@/components/tables/DataTable";
import { AppointmentModel } from "@/models/AppointmentModel";
import { columns } from "@/components/tables/columns";

const AdminPage = async () => {
  const appointments: AppointmentModel[] = [];

  return (
    <div className="flex w-[100%] flex-col space-y-11 bg-gray-50"> {/* Light background */}
      <main className="admin-main">
        <h1 className="text-3xl text-gray-900 font-extrabold self-start"> {/* Darker text for light theme */}
          Welcome 👋
        </h1>

        <section className="admin-stat grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            type="appointments"
            count={appointments.length}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.length}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.length}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments} />
      </main>
    </div>
  );
};
export default AdminPage;
