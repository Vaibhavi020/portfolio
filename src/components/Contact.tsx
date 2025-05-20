"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's connect!</h3>
          <p className="text-muted-foreground mb-6">
            I’m currently open to new opportunities. Feel free to drop a
            message.
          </p>
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/your-username" target="_blank">
              <FaGithub className="hover:text-indigo-500" />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank">
              <FaLinkedin className="hover:text-indigo-500" />
            </a>
            <a href="https://twitter.com/your-username" target="_blank">
              <BsTwitterX className="hover:text-indigo-500" />
            </a>
            <a href="mailto:you@example.com">
              <FaEnvelope className="hover:text-indigo-500" />
            </a>
          </div>
        </div>

        {/* Right (Form) */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your message"
            rows={7}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            <Send className="h-4 w-4" />
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {submitted && (
            <p className="text-green-600 text-sm">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
