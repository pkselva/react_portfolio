import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
    try {
        const { email, whatsapp, message } = req.body;

        if (!message || (!email && !whatsapp)) {
            return res
                .status(400)
                .json({ success: false, message: "Please provide message and either email or WhatsApp." });
        }

        const newContact = new Contact({ email, whatsapp, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Contact submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
};
