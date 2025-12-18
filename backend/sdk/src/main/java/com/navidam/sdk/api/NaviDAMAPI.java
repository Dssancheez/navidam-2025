package com.navidam.sdk.api;

import com.navidam.sdk.api.melodia.MelodiaFelizCumple;
import com.navidam.sdk.api.melodia.MelodiaMerryChristmas;
import com.navidam.sdk.api.melodia.MelodiaNavideña;
import com.navidam.sdk.api.melodia.MelodiaNocheDePaz;
import com.navidam.sdk.internal.html.Plantilla;
import com.navidam.sdk.internal.melodia.Melodia;

import java.util.List;

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
        		MelodiaFelizCumple.crear(),
        		MelodiaMerryChristmas.crear(),
        		 MelodiaNavideña.crear(),
        	     MelodiaNocheDePaz.crear()
        		
        );
    }

    public List<Plantilla> listadoPlantillas() {
        return List.of(
                // new Plantilla("demo").path("demo.html")
        );
    }
}
