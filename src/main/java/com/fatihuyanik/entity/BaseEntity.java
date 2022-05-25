package com.fatihuyanik.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

//superClass
@MappedSuperclass
@Data
@NoArgsConstructor

//Audit tanıtmak
@EntityListeners(AuditingEntityListener.class)

//Json pars için işlem yapılmasına izin vermemek
@JsonIgnoreProperties(value={"create_date,update_date"},allowGetters = true)
abstract public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id",nullable = false,updatable = false)
    private Long id;

    //Kim ekledi


    @CreatedBy
    @Column(name="create_by")
    private String createdBy;


    //Kim guncelledi

    @LastModifiedBy
    @CreatedBy
    @Column(name="update_by")
    private String updateBy;

    //Kim ne zaman guncelledi

    @LastModifiedDate
    @UpdateTimestamp
    @Column(name="update_date")
    public Date updateDate;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name="create_date",updatable = false)
    private Date date;
}