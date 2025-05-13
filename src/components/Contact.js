import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await axios.post("http://localhost:5000/send-email", formData);
            if (response.data.success) {
                setStatus("Message Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error sending message.");
        }
    };

    return (
        <motion.div className="text-center p-6"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-6">Have questions? Get in touch with us!</p>

            <motion.div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
                initial={{ scale: 0.9 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                            className="w-full p-2 border rounded" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No.</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            required
                        />
                        </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange}
                            className="w-full p-2 border rounded" rows="4" placeholder="Your message" required></textarea>
                    </div>

                    <motion.button type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600"
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>

                {status && <p className="mt-4 text-gray-800">{status}</p>}
            </motion.div>

            <motion.div className="mt-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 1 }}
            >
                <p className="text-gray-700">Phone: +91 7570853740</p>
                <p className="text-gray-700">Address: Scooter India Chaurah, Lucknow-Uttar Pradesh, India</p>
            </motion.div>
        </motion.div>
    );
};

export default Contact;