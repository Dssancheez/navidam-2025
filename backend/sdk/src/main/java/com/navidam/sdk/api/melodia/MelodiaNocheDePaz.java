package com.navidam.sdk.api.melodia;


import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;


public class MelodiaNocheDePaz {
	public static Melodia crear() {

		return new Melodia("Noche de Paz")
            .instrumento(Instrumento.GLOCKENSPIEL) 
            .tempo(100)
            
                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.LA,  Figura.CORCHEA)
                     .nota(Nota.SOL, Figura.CORCHEA)
                     .nota(Nota.MI,  Figura.BLANCA)

                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.LA,  Figura.CORCHEA)
                     .nota(Nota.SOL, Figura.CORCHEA)
                     .nota(Nota.MI,  Figura.BLANCA)
                     
                     .nota(Nota.RE,  Figura.NEGRA)
                     .nota(Nota.RE,  Figura.NEGRA)
                     .nota(Nota.SI,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.BLANCA)

                     .nota(Nota.LA,  Figura.NEGRA)
                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.LA,  Figura.CORCHEA)
                     .nota(Nota.DO,  Figura.CORCHEA)
                     .nota(Nota.SI,  Figura.BLANCA)

                   
                     .nota(Nota.LA,  Figura.NEGRA)
                     .nota(Nota.LA,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.NEGRA)
                     .nota(Nota.SI,  Figura.BLANCA)

                     .nota(Nota.LA_SOSTENIDO, Figura.NEGRA)      
                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.MI,  Figura.NEGRA)
                     .nota(Nota.SOL, Figura.BLANCA)

                     
                     .nota(Nota.LA,  Figura.NEGRA)
                     .nota(Nota.LA,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.NEGRA)
                     .nota(Nota.SI,  Figura.BLANCA)

                     .nota(Nota.LA_SOSTENIDO, Figura.NEGRA)     
                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.MI,  Figura.NEGRA)
                     .nota(Nota.SOL, Figura.BLANCA)

                     .nota(Nota.RE,  Figura.NEGRA)
                     .nota(Nota.SI,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.NEGRA)
                     .nota(Nota.LA,  Figura.BLANCA)

                     .nota(Nota.SOL, Figura.NEGRA)
                     .nota(Nota.MI,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.NEGRA)
                     .nota(Nota.RE,  Figura.NEGRA)
                     .nota(Nota.SI,  Figura.NEGRA)
                     .nota(Nota.DO,  Figura.REDONDA);


		
}}