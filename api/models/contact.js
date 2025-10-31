import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: false,
        },
        whatsapp: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
