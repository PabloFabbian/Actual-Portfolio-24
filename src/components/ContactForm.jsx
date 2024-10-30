import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            );
            console.log('Email sent successfully:', response);
            toast.success('Form sent successfully. Thank you for contacting me!');

            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('There was an error sending the form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#F3D5B5] md:py-0 2xl:py-16 h-1/3 md:scale-75 2xl:scale-100" id="Contact">
            <div className="container mx-auto px-4 h-full">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="bg-gradient-to-br from-[#9C6548] to-[#7F5539] p-12 text-[#ECDED2] flex items-center justify-center">
                            <div>
                                <h2 className="font-lt-soul text-5xl font-bold mb-6">Contact Me</h2>
                                <p className="text-xl mb-4">Feel free to reach out — I'm here for you.</p>
                                <p className="mb-8">Fill out the form, and I'll get back to you as soon as possible. I look forward to our conversation!</p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>+54 9 11 6852-9993</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>pablo.fabbian@gmail.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Buenos Aires, Argentina</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 bg-[#ECDED2]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#9C6548] mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-[#9C6548] bg-[#E1D4C7] rounded-lg focus:ring-2 focus:ring-[#9C6548] focus:border-transparent transition duration-300 ease-in-out"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#9C6548] mb-1">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-[#9C6548] bg-[#E1D4C7] rounded-lg focus:ring-2 focus:ring-[#9C6548] focus:border-transparent transition duration-300 ease-in-out"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#9C6548] mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-[#9C6548] bg-[#E1D4C7] rounded-lg focus:ring-2 focus:ring-[#9C6548] focus:border-transparent transition duration-300 ease-in-out"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#9C6548] text-[#ECDED2] font-bold py-3 px-6 rounded-lg hover:bg-[#7F5539] focus:outline-none focus:ring-2 focus:ring-[#9C6548] focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center"
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;