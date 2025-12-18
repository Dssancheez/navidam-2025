import Boton from "@/Componentes/Boton";
import Footer from "@/Componentes/Footer";
import Header from "@/Componentes/Header";
import { useState, type ChangeEvent } from "react";

export type PostalesForm = {
    destinatario: string;
    plantilla: string;
    melodia: string;
    campo1: string;
    campo2: string;
}

const defaultPostalesForm: PostalesForm = {
    destinatario: "",
    plantilla: "",
    melodia: "",
    campo1: "",
    campo2: "",
}

export default function Postales() {

    const [form, setForm] = useState<PostalesForm>(defaultPostalesForm);

    const handleDestinatarioOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const {value} = evt.target;
        setForm({
            ...form,
            destinatario:value
        })
    }

    const handlePlantillaOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const {value} = evt.target;
        setForm({
            ...form,
            plantilla:value
        })
    }

    const handleMelodiaOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const {value} = evt.target;
        setForm({
            ...form,
            melodia:value
        })
    }

    const handleCampo1OnChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const {value} = evt.target;
        setForm({
            ...form,
            campo1:value
        })
    }

    const handleCampo2OnChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        const {value} = evt.target;
        setForm({
            ...form,
            campo2:value
        })
    }

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                    <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-6">
                        <section className="rounded-3xl border border-slate-200 bg-white p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h1 className="text-2xl font-black tracking-tight">Enviar postal digital</h1>
                                    <p className="text-slate-600 text-sm mt-1">
                                        Selecciona destinatario, plantilla y melodía. Completa los campos requeridos.
                                    </p>
                                </div>

                            </div>

                            <form className="mt-6 space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-slate-700">Destinatario</label>
                                        <select value={form.destinatario} onChange={handleDestinatarioOnChange} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300">
                                            <option>Destinatario 1</option>
                                            <option>Destinatario 2</option>
                                            <option>Destinatario 3</option>
                                            <option>Destinatario 4</option>
                                            <option>Destinatario 5</option>
                                        </select>
                                        <p className="mt-2 text-xs text-slate-500">
                                            React mostrará aquí el nombre y email del destinatario seleccionado.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-700">Plantilla</label>
                                        <select value={form.plantilla} onChange={handlePlantillaOnChange} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300">
                                            <option>Plantilla roja</option>
                                            <option>Plantilla azul</option>
                                            <option>Plantilla verde</option>
                                            <option>Plantilla amarilla</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-700">Melodía</label>
                                        <select value={form.melodia} onChange={handleMelodiaOnChange} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300">
                                            <option>Jingle Bells</option>
                                            <option>Noche de paz</option>
                                            <option>Feliz navidad</option>
                                            <option>Mi burrito sabanero</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm font-semibold">Campos requeridos por la plantilla</p>
                                    <p className="text-xs text-slate-500 mt-1">React generará estos inputs según la plantilla seleccionada.</p>
                                </div>

                                <div className="grid gap-4">
                                    <div>
                                        <label className="text-sm text-slate-700">[Campo requerido 1]</label>
                                        <input value={form.campo1} onChange={handleCampo1OnChange} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300" placeholder="..." />
                                    </div>
                                    <div>
                                        <label className="text-sm text-slate-700">[Campo requerido 2]</label>
                                        <textarea value={form.campo2} onChange={handleCampo2OnChange} rows={4} className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300" placeholder="..."></textarea>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    <Boton texto={"Previsualizar"} color={'#000000ff'} />
                                    <Boton texto={"Eliminar"} color={'#b40000ff'} />
                                </div>

                                <p className="text-sm text-slate-500">(React mostrará aquí mensajes de validación / envío)</p>
                            </form>
                        </section>

                        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-extrabold">Vista previa</h2>
                                <span className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">HTML</span>
                            </div>

                            <div className="mt-4 rounded-2xl bg-white overflow-hidden border border-slate-200">
                                <div className="p-6">
                                    <p className="text-sm text-slate-600">
                                        React mostrará aquí el HTML devuelto por <span className="font-semibold">/api/postales/preview</span>.
                                    </p>
                                    <div className="mt-4 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                                        <p className="font-extrabold">[Saludo / título]</p>
                                        <p className="mt-2 text-slate-700">[Contenido renderizado]</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-sm font-semibold">Tip</p>
                                <p className="text-sm text-slate-600 mt-1">
                                    En React, renderiza el HTML en un <span className="font-semibold">iframe</span> para aislar estilos.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}