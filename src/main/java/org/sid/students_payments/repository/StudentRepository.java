package org.sid.students_payments.repository;

import org.sid.students_payments.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Long> {
  //  @Query("SELECT s FROM Student s WHERE s.code = ?1")
      Student findByCode(String code);

    List<Student> findByProgramId(String programId);
}
