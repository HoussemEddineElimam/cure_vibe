export interface PrescriptionModel {
    id: string;
    doctorId: string;
    patientId: string;
    appointmentId: string;
    medication: string;
    dosage: string;
    frequency: string;
    startDate: Date;
    endDate: Date;
  }