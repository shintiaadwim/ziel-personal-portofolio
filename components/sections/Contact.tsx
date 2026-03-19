import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-28 bg-white dark:bg-zinc-950 px-6 py-28">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-stretch">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
}