import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export const revalidate = 60; // ISR

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] text-white items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full rounded bg-[#1A1A1A] border border-[#2A2A2A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded bg-[#1A1A1A] border border-[#2A2A2A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded bg-[#1A1A1A] border border-[#2A2A2A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#4A90E2] px-4 py-2 font-semibold text-white hover:bg-[#357ABD] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
