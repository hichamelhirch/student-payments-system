package org.sid.students_payments.entities;

import jakarta.persistence.*;
import lombok.*;
import org.sid.students_payments.enums.PaymentStatus;
import org.sid.students_payments.enums.PaymentType;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class Payment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate datePayment;
    private double amount;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;
    private String file;
    @ManyToOne
    private Student student;
}