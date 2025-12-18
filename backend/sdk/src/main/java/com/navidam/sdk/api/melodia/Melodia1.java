package com.navidam.sdk.api.melodia;

import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class Melodia1 {
	public static Melodia crear() {
		return new Melodia ("Melodia1")
				.tempo(90)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.SOL, Figura.CORCHEA)
				.nota(Nota.LA, Figura.CORCHEA)
				.nota(Nota.SI, Figura.NEGRA)
				.nota(Nota.LA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.CORCHEA)
				.nota(Nota.FA, Figura.NEGRA)
	
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.SOL, Figura.CORCHEA)
				.nota(Nota.LA, Figura.CORCHEA)
				.nota(Nota.SI, Figura.NEGRA)
				.nota(Nota.LA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.CORCHEA)
				.nota(Nota.FA, Figura.NEGRA)
		
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.LA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.CORCHEA)
				.nota(Nota.FA, Figura.NEGRA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.RE, Figura.CORCHEA)
				.nota(Nota.MI, Figura.NEGRA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.RE, Figura.NEGRA)
		
				.nota(Nota.DO, Figura.CORCHEA)
				.nota(Nota.RE, Figura.CORCHEA)
				.nota(Nota.MI, Figura.NEGRA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.RE, Figura.NEGRA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.SOL, Figura.NEGRA)
				.nota(Nota.FA, Figura.CORCHEA)
				.nota(Nota.MI, Figura.CORCHEA)
				.nota(Nota.RE, Figura.NEGRA);

	}

}
