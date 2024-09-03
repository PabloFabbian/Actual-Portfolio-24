import React from 'react'

function SelfSummary() {
    return (
        <section className="bg-[#7F5539] pt-12" id="About">
            <div className="container mx-auto px-4">
                <h2 className="font-lt-soul text-7xl font-medium text-center text-[#FFD275] mb-12">
                    Self-Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Perfil Profesional */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg col-span-2 text-white">
                        <h3 className="text-2xl font-bold mb-4">Breve Perfil Profesional</h3>
                        <p className="mb-2">
                            <strong>Qué me Inspira:</strong> Transformar ideas en experiencias digitales es mi pasión.
                        </p>
                        <p>
                            <strong>Visión Personal:</strong> Creo en la simplicidad y en el poder de un buen diseño para resolver problemas.
                        </p>
                    </div>

                    {/* Datos Curiosos */}
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Datos Curiosos</h3>
                        <p>
                            Cuando no estoy codificando, me encontrarás explorando nuevas tendencias en diseño UX o creando interfaces para proyectos personales.
                        </p>
                    </div>

                    {/* Imagen 1 */}
                    <div className="relative rounded-lg shadow-lg overflow-hidden h-48">
                        <img
                            src="/placeholder.svg?height=192&width=384"
                            alt="Imagen representativa de desarrollo web"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Proyectos Destacados */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg text-white col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Proyectos Destacados</h3>
                        <p className="mb-2">
                            <strong>Logro Clave:</strong> Desarrollé una aplicación que facilitó la gestión de proyectos para equipos remotos.
                        </p>
                        <p>
                            <strong>Impacto:</strong> Incrementó la eficiencia del 20%.
                        </p>
                    </div>

                    {/* Cita Personal */}
                    <div className="bg-gradient-to-br from-pink-500 to-red-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Cita Personal</h3>
                        <p className="text-xl italic">
                            "El diseño es la inteligencia hecha visible."
                        </p>
                    </div>

                    {/* Estilo de Trabajo */}
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Estilo de Trabajo</h3>
                        <p className="mb-2">
                            <strong>Metodología:</strong> Utilizo un enfoque centrado en el usuario para asegurar que cada proyecto sea funcional y estéticamente agradable.
                        </p>
                        <p>
                            <strong>Colaboración:</strong> Disfruto trabajando en equipo para lograr soluciones innovadoras.
                        </p>
                    </div>

                    {/* Imagen 2 */}
                    <div className="relative rounded-lg shadow-lg overflow-hidden h-50">
                        <img
                            src="/placeholder.svg?height=192&width=384"
                            alt="Imagen representativa de diseño web"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div style={{ height: '150px', overflow: 'hidden' }} className="bg-[#E6CCB2]">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%', transform: 'rotate(180deg)' }}
                >
                    <path
                        d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                        style={{ stroke: 'none', fill: '#7F5539' }}
                    />
                </svg>
            </div>

        </section>
    )
}

export default SelfSummary