package com.lib.library.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;  // si tu utilises le Model pour passer des variables à la vue
@Controller
public class WebController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("user", "lecteur");
        return "index";  // correspond à templates/index.html (si Thymeleaf)
    }
}