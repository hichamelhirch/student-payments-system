package org.sid.students_payments;

import org.sid.students_payments.entities.Payment;
import org.sid.students_payments.entities.Student;
import org.sid.students_payments.enums.PaymentStatus;
import org.sid.students_payments.enums.PaymentType;
import org.sid.students_payments.repository.PaymentRepository;
import org.sid.students_payments.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.UUID;

@SpringBootApplication
public class StudentsPaymentsApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentsPaymentsApplication.class, args);
   }
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository, PaymentRepository paymentRepository) {
        return args -> {
            // Création de quelques étudiants
            Student student1 = Student.builder()
                    .firstName("Alice")
                    .lastName("Smith")
                    .code(UUID.randomUUID().toString().substring(3,5))
                    .programId("P001")

                    .build();

            Student student2 = Student.builder()

                    .firstName("Bob")
                    .lastName("Johnson")
                    .code(UUID.randomUUID().toString().substring(3,5))
                    .programId("P002")

                    .build();

            Student student3 = Student.builder()

                    .firstName("Charlie")
                    .lastName("Brown")
                    .code(UUID.randomUUID().toString().substring(3,5))
                    .programId("P003")

                    .build();

            Student student4 = Student.builder()

                    .firstName("Diana")
                    .lastName("Prince")
                    .code(UUID.randomUUID().toString().substring(3,5))
                    .programId("P004")

                    .build();

            // Sauvegarde des étudiants dans la base de données
            studentRepository.save(student1);
            studentRepository.save(student2);
            studentRepository.save(student3);
            studentRepository.save(student4);

            // Création de quelques paiements pour chaque étudiant
            studentRepository.findAll().forEach(student -> {
                for (int i = 0; i < 40; i++) {
                    Payment payment = Payment.builder()
                            .datePayment(LocalDate.now().minusMonths(i))
                            .amount(100 + i * 10)
                            .paymentType(PaymentType.values()[i % PaymentType.values().length])
                            .paymentStatus(PaymentStatus.values()[i % PaymentStatus.values().length])

                            .student(student)
                            .build();
                    paymentRepository.save(payment);
                }
            });
        };
    }
}
