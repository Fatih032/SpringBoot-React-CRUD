package com.fatihuyanik.service.impl;


import com.fatihuyanik.model.Sporcu;
import com.fatihuyanik.repository.SporcuRepository;
import com.fatihuyanik.service.IService;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class SporcuServiceImpl implements IService<com.fatihuyanik.model.Sporcu> {

    @Autowired
    private SporcuRepository sporcuRepository;

    @Override
    public Collection<Sporcu> findAll() {
        return (Collection<Sporcu>) sporcuRepository.findAll();
    }

    @Override
    public Optional<Sporcu> findById(Long id) {
        return sporcuRepository.findById(id);
    }

    @Override
    public Sporcu saveOrUpdate(Sporcu sporcu) {
        return sporcuRepository.save(sporcu);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            sporcuRepository.deleteById(id);
            jsonObject.put("message", "Sporcu deleted successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }
}
