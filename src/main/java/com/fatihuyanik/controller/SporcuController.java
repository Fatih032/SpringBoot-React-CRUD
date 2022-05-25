package com.fatihuyanik.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fatihuyanik.expection.ResourceNotFoundExpection;
import com.fatihuyanik.model.Sporcu;
import com.fatihuyanik.repository.SporcuRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//http://localhost:8081/rest/sporcu/all
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/sporcu")
public class SporcuController {
        @Autowired
        private SporcuRepository sporcuRepository;

//        @Autowired
//        private UserRepository userRepository;

        // http://localhost:8080/sporcu/all
        @GetMapping("/all")
        public List<Sporcu> getAllEmployees() {
            return sporcuRepository.findAll();
        }

        @PostMapping("/all")
        public Sporcu createEmployee(@RequestBody Sporcu sporcu) {
            return sporcuRepository.save(sporcu);
        }

        //get employee by id
        // http://localhost:8080/sporcu/all/1
        @GetMapping("/all/{id}")
        public ResponseEntity<Sporcu> getEmployeeById(@PathVariable Long id) {
            Sporcu sporcu = sporcuRepository.findById(id)
                    .orElseThrow((() -> new ResourceNotFoundExpection("Sporcu Bulunamadı." + id)));
            return ResponseEntity.ok(sporcu);
        }

        // update employee by id
        @PutMapping("/all/{id}")
        public ResponseEntity<Sporcu> updateEmployee(@PathVariable Long id, @RequestBody Sporcu employeeDetails) {
            Sporcu sporcu = sporcuRepository.findById(id)
                    .orElseThrow((() -> new ResourceNotFoundExpection("Sporcu Bulunamadı." + id)));
            sporcu.setIsim(employeeDetails.getIsim());
            sporcu.setSoyisim(employeeDetails.getSoyisim());
            sporcu.setDogumtarihi(employeeDetails.getDogumtarihi());
            sporcu.setKulüp(employeeDetails.getKulüp());
            sporcu.setSıno(employeeDetails.getSıno());
            Sporcu updatedSporcu = sporcuRepository.save(sporcu);
            return ResponseEntity.ok(updatedSporcu);
        }

        // delete employee by id
        @DeleteMapping("/all/{id}")
        public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
            Sporcu sporcu = sporcuRepository.findById(id)
                    .orElseThrow((() -> new ResourceNotFoundExpection("Sporcu Bulunamadı." + id)));

            sporcuRepository.delete(sporcu);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }

}

