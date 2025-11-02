import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            validate: {
                validator: function (v) {
                    if (!v) return true;
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                },
                message: "Invalid email format.",
            },
        },
        whatsapp: {
            type: String,
            trim: true,
            validate: {
                validator: function (v) {
                    if (!v) return true;
                    return /^\d{10}$/.test(v);
                },
                message: "Invalid WhatsApp number. It must be exactly 10 digits.",
            },
        },
        message: {
            type: String,
            required: [true, "Message is required."],
            trim: true,
            minlength: [5, "Message must be at least 5 characters long."],
            maxlength: [500, "Message cannot exceed 500 characters."],
        },
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
