package org.sid.students_payments.web;

import lombok.RequiredArgsConstructor;
import org.sid.students_payments.dtos.NewPaymentDTO;
import org.sid.students_payments.entities.Payment;

import org.sid.students_payments.enums.PaymentStatus;
import org.sid.students_payments.enums.PaymentType;
import org.sid.students_payments.service.PaymentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor

@CrossOrigin("*")
public class PaymentController {
    private final PaymentService paymentService;

    @GetMapping("/payments")
    public List<Payment> allPayments(){
        return paymentService.allPayments();
    }

    @GetMapping("/students/{code}/payments")
    public List<Payment> paymentsByStudent(@PathVariable String code){
        return  paymentService.paymentsByStudent(code);
    }

    @GetMapping("/payments/{id}")

    public Payment getPaymentById(Long id){
        return paymentService.getPaymentById(id);
    }


   @GetMapping("/payments/status/{paymentStatus}")
    public List<Payment> paymentsByStatus(@RequestParam PaymentStatus paymentStatus){
        return  paymentService.paymentsByStatus(paymentStatus);
    }
    @GetMapping("/payments/type/{paymentType}")
    public List<Payment> paymentsByType(PaymentType paymentType){
        return  paymentService.paymentsByType(paymentType);
    }
  @PutMapping("/payment/{id}")
    public Payment  updatePaymentStatus(@RequestParam PaymentStatus paymentStatus,@PathVariable Long id){
        return paymentService.updateStatus(paymentStatus,id);
    }


    @PostMapping(path = "/payments/",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Payment savePayment(@RequestParam MultipartFile file,NewPaymentDTO newPaymentDTO) throws IOException {
       return paymentService.savePayment(file,newPaymentDTO);
    }
  @GetMapping(value = "/paymentFile/{paymentId}",produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getPaymentFile(@PathVariable Long paymentId) throws IOException {
        return paymentService.getPaymentFile(paymentId);
    }

    }
