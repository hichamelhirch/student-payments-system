package org.sid.students_payments.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.sid.students_payments.enums.PaymentType;
import org.springframework.validation.beanvalidation.SpringValidatorAdapter;

import java.time.LocalDate;
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class NewPaymentDTO {
    private LocalDate date;
   private double amount;
   private PaymentType paymentType;
    private String studentCode;
}
