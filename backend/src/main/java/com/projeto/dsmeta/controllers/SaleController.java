package com.projeto.dsmeta.controllers;
import com.projeto.dsmeta.entities.Sale;
import com.projeto.dsmeta.services.SaleService;
import com.projeto.dsmeta.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;


@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    @Autowired
    private SaleService service;
    @Autowired
    private SmsService smsService;

    @GetMapping
    public Page<Sale> findSale(
            @RequestParam(value = "minDate", defaultValue = "") String minDate,
            @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
            Pageable pageable) {
        return service.findSales(minDate, maxDate, pageable);
    }

    @GetMapping("/{id}/notification")
    public void notifySms(@PathVariable Long id ) {
        smsService.sendSms(id);
    }
}
