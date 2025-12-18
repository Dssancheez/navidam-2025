package com.navidam.sdk.api.melodia;


import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Nota;
import com.navidam.sdk.internal.melodia.Melodia;


public class MelodiaFelizCumple {
	 public static Melodia crear() {
	       
	    	  return new Melodia("felis cumpleaños")
				    	.instrumento(Instrumento.PIANO_ACUSTICO)
				    	.tempo(150)

			.nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.FA, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)

            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.SOL, Figura.NEGRA)
            .nota(Nota.FA, Figura.NEGRA)
 
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA)     
            .nota(Nota.LA, Figura.NEGRA)
            .nota(Nota.FA, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.RE, Figura.NEGRA)

            .nota(Nota.LA_SOSTENIDO, Figura.NEGRA)        
            .nota(Nota.LA_SOSTENIDO, Figura.NEGRA)
            .nota(Nota.FA, Figura.NEGRA)
            .nota(Nota.SOL, Figura.NEGRA)
            .nota(Nota.FA, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.DO, Figura.NEGRA);
    }
}
	

