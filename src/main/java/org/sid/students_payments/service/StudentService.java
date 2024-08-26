package org.sid.students_payments.service;

import lombok.RequiredArgsConstructor;
import org.sid.students_payments.entities.Student;
import org.sid.students_payments.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final String uploadDir = "uploads/";

    public Student getStudentByCode(String code){
        return studentRepository.findByCode(code);
    }


    public List<Student> allStudents(){
        return studentRepository.findAll();
    }

    public List<Student> getStudentByProgramId(String programId){
        return studentRepository.findByProgramId(programId);
    }



}
