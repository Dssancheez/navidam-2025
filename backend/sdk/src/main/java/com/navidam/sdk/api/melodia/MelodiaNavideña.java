package com.navidam.sdk.api.melodia;


import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;


public class MelodiaNavideña {
	public static Melodia crear() {
		 
		 return new Melodia ("jingle bells")
				 .instrumento(Instrumento.GLOCKENSPIEL)
				 .tempo(132)
				 .nota(Nota.MI, Figura.NEGRA)
				 .nota(Nota.MI, Figura.NEGRA)
				 .nota(Nota.MI, Figura.NEGRA)
				 
				 .nota(Nota.MI, Figura.NEGRA)
				 .nota(Nota.MI, Figura.NEGRA)
				 .nota(Nota.MI, Figura.NEGRA)
				 
				 .nota(Nota.MI, Figura.NEGRA)
				 .nota(Nota.SOL, Figura.NEGRA)
				 .nota(Nota.DO, Figura.NEGRA)
				 .nota(Nota.RE, Figura.NEGRA)
				 .nota(Nota.MI, Figura.NEGRA)
				 
				 .nota(Nota.FA, Figura.NEGRA)
		         .nota(Nota.FA, Figura.NEGRA)
		         .nota(Nota.FA, Figura.NEGRA)
		         .nota(Nota.FA, Figura.NEGRA)
		
		         .nota(Nota.FA, Figura.NEGRA)
		         .nota(Nota.MI, Figura.NEGRA)
		         .nota(Nota.MI, Figura.NEGRA)
		         .nota(Nota.MI, Figura.NEGRA)
		         .nota(Nota.MI, Figura.NEGRA)
		
		         .nota(Nota.MI, Figura.NEGRA)
		         .nota(Nota.RE, Figura.NEGRA)
		         .nota(Nota.RE, Figura.NEGRA)
		         .nota(Nota.MI, Figura.NEGRA)
		         .nota(Nota.RE, Figura.NEGRA)
		         .nota(Nota.SOL, Figura.NEGRA);
		 
				
		 }
	 }
