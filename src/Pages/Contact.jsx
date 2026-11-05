import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiGithub, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";
import { contactInfo, socials } from "../data/socials";

const EMAILJS = {
  serviceId: "service_vwr0nkq",
  templateId: "template_09991ke",
  publicKey: "hzuxgdjmF1d_QQv-r",
};

const channels = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/anfal11",
    href: "https://github.com/anfal11",
    icon: FiGithub,
  },
  {
    label: "Location",
    value: contactInfo.location,
    icon: FiMapPin,
  },
];

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form.current,
        EMAILJS.publicKey
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error("Message could not be sent. Please try again.");
          console.error(error?.text ?? error);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind or an opportunity to discuss? Drop me a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div data-aos="fade-right" className="space-y-4 lg:col-span-5">
            {channels.map((channel) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-blue-600 text-xl text-white shadow-lg shadow-brand-500/25">
                    <channel.icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {channel.label}
                    </p>
                    <p className="truncate font-semibold text-slate-800 dark:text-slate-100">
                      {channel.value}
                    </p>
                  </div>
                </>
              );
              const className =
                "card-surface card-hover flex items-center gap-4 p-5";
              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={channel.label} className={className}>
                  {inner}
                </div>
              );
            })}

            <div className="card-surface p-5">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Follow me
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="social-btn"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            className="card-surface p-6 sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="reply_to"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your email
                </label>
                <input
                  id="reply_to"
                  type="email"
                  name="reply_to"
                  required
                  placeholder="you@example.com"
                  className="input-field"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="input-field resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-brand mt-6 w-full sm:w-auto"
            >
              <FiSend /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
