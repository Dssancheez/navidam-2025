package com.navidam.sdk.api;

import java.util.List;

import com.navidam.sdk.internal.html.Plantilla;
import com.navidam.sdk.internal.melodia.Melodia;

public class NaviDAMAPI {

    private static NaviDAMAPI instace;

    public static NaviDAMAPI getInstance() {
        if (instace == null) {
            instace = new NaviDAMAPI();
        }
        return instace;
    }

    public List<Melodia> listadoMelodias() {
        return List.of(
             
        );
    }

    public List<Plantilla> listadoPlantillas() {
        return List.of(
                 new Plantilla("Plantilla 1").path("plantilla.html")
        );
    }
}
