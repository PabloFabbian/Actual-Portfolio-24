import React from 'react'

function ContactForm() {
    return (
        <>
            <section className="bg-gradient-to-b from-orange-100 to-orange-300 py-12" id="Contact">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        {/* Contact Text */}
                        <h2 className="text-5xl font-extrabold text-orange-700 mb-4">Contact Me</h2>
                        <p className="text-orange-700 text-xl">Hey There!</p>
                        <p className="text-orange-700">Feel free to fill out the next form. It'll land straight into my inbox. Can't wait to chat with you!</p>
                    </div>
                    <div>
                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                {/* Name Field */}
                                <input type="text" className="appearance-none border border-orange-300 rounded-lg w-full py-3 px-4 text-orange-700 leading-tight focus:outline-none focus:border-orange-500 placeholder-orange-300" placeholder="Nombre" />
                            </div>
                            <div className="mb-4">
                                {/* Email Field */}
                                <input type="email" className="appearance-none border border-orange-300 rounded-lg w-full py-3 px-4 text-orange-700 leading-tight focus:outline-none focus:border-orange-500 placeholder-orange-300" placeholder="E-mail" />
                            </div>
                            <div className="mb-4">
                                {/* Message Field */}
                                <textarea className="appearance-none border border-orange-300 rounded-lg w-full py-3 px-4 text-orange-700 leading-tight focus:outline-none focus:border-orange-500 placeholder-orange-300" rows="5" placeholder="Mensaje"></textarea>
                            </div>
                            {/* Submit Button */}
                            <div className="text-right">
                                <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section></>
    )
}

export default ContactForm