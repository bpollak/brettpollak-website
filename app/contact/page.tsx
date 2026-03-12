import ContactContent from './ContactContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Brett Pollak",
  description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/contact",
  },
  openGraph: {
    title: "Connect with Brett Pollak",
    description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
    url: "https://brettcpollak.com/contact",
  },
};

export default function Contact() {
  return <ContactContent />;
}
