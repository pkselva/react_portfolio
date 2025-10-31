import { useState } from "react";
import { FaRegCommentDots, FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message || (!email && !whatsapp)) {
            alert("Please fill in your message and either email or WhatsApp.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, whatsapp, message }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Message sent successfully!");
                setEmail("");
                setWhatsapp("");
                setMessage("");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again later.");
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-5 bg-[#1f1f1f] rounded-[20px] p-3 sm:p-4 md:px-10 md:py-6"
        >
            <div className="flex items-center gap-2 md:gap-3 w-full">
                <div className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 sm:min-w-12 sm:min-h-12 sm:w-12 sm:h-12 rounded-full text-black text-lg transition-all shrink-0 bg-[#c9f31d]">
                    <MdMailOutline size={18} className="sm:size-6" />
                </div>
                <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 sm:h-full rounded-xl bg-transparent border-2 border-gray-600 text-white text-sm sm:text-base focus:border-[#c9f31d] outline-none p-3 transition-all"
                />
            </div>

            <div className="flex items-center gap-2 md:gap-3 w-full">
                <div className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 sm:min-w-12 sm:min-h-12 sm:w-12 sm:h-12 rounded-full text-black text-lg transition-all shrink-0 bg-[#c9f31d]">
                    <FaWhatsapp size={18} className="sm:size-6" />
                </div>
                <input
                    type="tel"
                    placeholder="Your WhatsApp Number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full h-10 sm:h-full rounded-xl bg-transparent border-2 border-gray-600 text-white text-sm sm:text-base focus:border-[#c9f31d] outline-none p-3 transition-all"
                />
            </div>
            <div className="flex items-start gap-2 md:gap-3 w-full">
                <div className="flex mt-1 items-center justify-center min-w-8 min-h-8 w-8 h-8 sm:min-w-12 sm:min-h-12 sm:w-12 sm:h-12 rounded-full text-black text-lg transition-all shrink-0 bg-[#c9f31d]">
                    <FaRegCommentDots size={18} className="sm:size-6" />
                </div>
                <textarea
                    placeholder="Comment your thoughts....."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl bg-transparent border-2 border-gray-600 text-white text-sm sm:text-base focus:border-[#c9f31d] outline-none p-3 transition-all"
                />
            </div>

            <button
                type="submit"
                className="bg-[#c9f31d] text-[#070707] w-full mx-auto font-semibold px-7 py-2 rounded-xl sm:rounded-[15px] cursor-pointer hover:bg-[#b4da1a] transition-all duration-300 sm:w-auto"
            >
                Let's Connect
            </button>
        </form>
    )
}

export default ContactForm