import { Status } from "./AppointmentStatus";
export interface AppointmentModel{
    id: string;
    doctorId:string;
    patientId: string;
    status:Status;
    appointmentDateTime:Date;
    cost:number;
    notes :string[];
}