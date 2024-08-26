package org.sid.students_payments.service;

import lombok.RequiredArgsConstructor;
import org.sid.students_payments.dtos.NewPaymentDTO;
import org.sid.students_payments.entities.Payment;
import org.sid.students_payments.entities.Student;
import org.sid.students_payments.enums.PaymentStatus;
import org.sid.students_payments.enums.PaymentType;
import org.sid.students_payments.repository.PaymentRepository;
import org.sid.students_payments.repository.StudentRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final StudentRepository  studentRepository;

    public List<Payment> allPayments(){
        return paymentRepository.findAll();
    }

    public List<Payment> paymentsByStudent(String code){
        return  paymentRepository.findByStudentCode(code);
    }

    public List<Payment> paymentsByStatus(PaymentStatus paymentStatus){
        return  paymentRepository.findByPaymentStatus(paymentStatus);
    }

    public List<Payment> paymentsByType(PaymentType paymentType){
        return  paymentRepository.findByPaymentType(paymentType);
    }

    public Payment getPaymentById(Long id){
        return paymentRepository.findById(id).get();
    }

    public Payment  updateStatus(PaymentStatus paymentStatus,Long id){
       Payment payment=paymentRepository.findById(id).get();
       payment.setPaymentStatus(paymentStatus);
       return paymentRepository.save(payment);
    }

    public Payment savePayment(MultipartFile file, NewPaymentDTO newPaymentDTO) throws IOException {
        // Définir le dossier de stockage
        Path folderPath = Paths.get(System.getProperty("user.home"), "Desktop", "FORMATION", "Formation Spring", "Students_Payments", "Stock", "payments_file");

        // Créer le répertoire s'il n'existe pas
        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }

        // Générer un nom de fichier unique
        String fileName = UUID.randomUUID().toString().substring(0, 7) + ".pdf";
        Path filePath = folderPath.resolve(fileName);

        // Sauvegarder le fichier
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Récupérer l'étudiant par code
        Student student = studentRepository.findByCode(newPaymentDTO.getStudentCode());

        // Créer un objet Payment
        Payment payment = Payment.builder()
                .datePayment(newPaymentDTO.getDate())
                .paymentType(newPaymentDTO.getPaymentType())
                .amount(newPaymentDTO.getAmount())
                .paymentStatus(PaymentStatus.CREATED)
                .file(filePath.toString())
                .student(student)
                .build();

        // Enregistrer le paiement en base de données
        return paymentRepository.save(payment);
    }

    public byte[] getPaymentFile(Long paymentId) throws IOException {
        Payment existingPayment = paymentRepository.findById(paymentId).get();
        return Files.readAllBytes(Path.of(existingPayment.getFile()));
    }
}
