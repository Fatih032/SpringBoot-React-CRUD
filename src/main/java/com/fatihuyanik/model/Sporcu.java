package com.fatihuyanik.model;

import com.fatihuyanik.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@NoArgsConstructor
@Data
@Entity
@Table(name = "sporcu")
public class Sporcu extends BaseEntity implements Serializable {

    public final static long serialVersionUID = 1L;


    @Column(name = "isim")
    private String isim;

    @Column(name = "soyisim")
    private String soyisim;

    @Column(name = "sıno")
    private String sıno;

    @Column(name = "kulüp")
    private String kulüp;

    @Column(name = "dogum_tarihi")
    private String dogumtarihi;

    public Sporcu(String isim, String soyisim, String sıno, String kulüp, String dogumtarihi) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.sıno = sıno;
        this.kulüp = kulüp;
        this.dogumtarihi = dogumtarihi;
    }
}
