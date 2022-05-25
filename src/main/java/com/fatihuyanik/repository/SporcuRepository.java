package com.fatihuyanik.repository;

import com.fatihuyanik.model.Sporcu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SporcuRepository extends JpaRepository<Sporcu, Long> {
}
