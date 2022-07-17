package com.projeto.dsmeta.services;
import com.projeto.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.projeto.dsmeta.entities.Sale;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SaleService {
    @Autowired
    private SaleRepository repository;
    
    public List<Sale> findSales() {
        return repository.findAll();
    }
}