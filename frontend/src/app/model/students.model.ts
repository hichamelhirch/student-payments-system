export interface Student{
  id :number;
  firstName :string;
  lastName :string;
  code : string;
  programId :string;
  photo : string;
}

export interface Payment{
  id :number;
  datePayment : Date;
  amount : number;
  paymentType: PaymentType;
  file : string;
  paymentStatus :PaymentStatus;
  student :Student;

}

export enum PaymentType {
  CHEK="CHECK",
  CASH="CASH",
  TRANSFER="TRANSFER",
  DEPOSIT="DEPOSIT"
}
export enum PaymentStatus {
  CREATED="CREATED" ,
  VALIDATED="VALIDATED" ,
  REJECTED="REJECTED"
}
