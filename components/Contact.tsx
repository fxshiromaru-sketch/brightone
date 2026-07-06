import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-zinc-900">

      <h2 className="text-5xl font-bold mb-6">
        CONTACT
      </h2>

      <p className="text-gray-400">
        お気軽にお問い合わせください
      </p>

      <ContactForm />

    </section>
  );
}