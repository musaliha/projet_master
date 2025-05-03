package com.lib.library.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {

    // Redirige toutes les requêtes (non-API, non-fichiers) vers Angular index.html
    @RequestMapping(value = { "/", "/{path:^(?!api|soap).*}/**" })
    public String forwardToFrontend() {
        return "forward:/index.html";
    }
}
