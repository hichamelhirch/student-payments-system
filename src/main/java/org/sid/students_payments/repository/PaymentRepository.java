package org.sid.students_payments.repository;

import org.sid.students_payments.entities.Payment;
import org.sid.students_payments.enums.PaymentStatus;
import org.sid.students_payments.enums.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment,Long> {

List<Payment> findByStudentCode(String code);
List<Payment> findByPaymentStatus(PaymentStatus paymentStatus);
List<Payment> findByPaymentType(PaymentType paymentType);
}
