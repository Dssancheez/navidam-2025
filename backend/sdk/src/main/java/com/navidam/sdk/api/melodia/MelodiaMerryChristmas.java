package com.navidam.sdk.api.melodia;


import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;


public class MelodiaMerryChristmas {
	public static Melodia crear() {
		 
		 return new Melodia ("We Wish You a Merry Christmas") 
			 .instrumento(Instrumento.GLOCKENSPIEL)
			 .tempo(128)
			.nota(Nota.LA, Figura.NEGRA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.RE, Figura.CORCHEA)
            .nota(Nota.MI, Figura.CORCHEA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.DO_SOSTENIDO, Figura.BLANCA)   
            
            .nota(Nota.SI, Figura.NEGRA)
            .nota(Nota.SI, Figura.CORCHEA)
            .nota(Nota.SI, Figura.CORCHEA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.DO_SOSTENIDO, Figura.NEGRA)
            .nota(Nota.RE, Figura.BLANCA)

            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.FA_SOSTENIDO, Figura.CORCHEA)
            .nota(Nota.MI, Figura.CORCHEA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.SI, Figura.NEGRA)
            .nota(Nota.LA, Figura.BLANCA)

            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.FA_SOSTENIDO, Figura.CORCHEA)
            .nota(Nota.MI, Figura.CORCHEA)
            .nota(Nota.RE, Figura.NEGRA)
            .nota(Nota.MI, Figura.NEGRA)
            .nota(Nota.RE, Figura.NEGRA)           
            .nota(Nota.RE, Figura.REDONDA);         
    }

}