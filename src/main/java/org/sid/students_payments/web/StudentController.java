package org.sid.students_payments.web;

import lombok.RequiredArgsConstructor;
import org.sid.students_payments.entities.Student;
import org.sid.students_payments.service.StudentService;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/students")
    public List<Student> allStudents(){
        return studentService.allStudents();
    }

    @GetMapping("/student/code")
    public Student getStudentByCode(@PathVariable String code){
        return studentService.getStudentByCode(code);
    }

    @GetMapping("/studentsByProgramId")
    public List<Student> getStudentByProgramId(@RequestParam(name = "programId") String programId){
        return studentService.getStudentByProgramId(programId);
    }

}
