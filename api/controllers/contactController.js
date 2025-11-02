import Contact from "../models/contact.js";

export const submitContact = async (req, res) => {
    try {
        const { email, whatsapp, message } = req.body;

        if (!email || !whatsapp || !message) {
            return res.status(400).json({
                success: false,
                message: "Please provide email, WhatsApp number, and message.",
            });
        }

        const newContact = new Contact({ email, whatsapp, message });
        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Contact submitted successfully!",
        });

    } catch (error) {
        console.error("Error saving contact:", error);

        if (error.name === "ValidationError") {
            const fieldErrors = {};
            for (let field in error.errors) {
                fieldErrors[field] = error.errors[field].message;
            }

            return res.status(400).json({
                success: false,
                message: "Validation failed.",
                errors: fieldErrors,
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};
