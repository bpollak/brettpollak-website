import ContactContent from './ContactContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Brett Pollak | AI Speaker & Technology Consultant",
  description: "Connect with Brett Pollak for speaking engagements, consulting on AI implementation in higher education, or collaboration opportunities.",
  alternates: {
    canonical: "https://brettcpollak.com/contact",
  },
  openGraph: {
    title: "Contact Brett Pollak | AI Speaker & Technology Consultant",
    description: "Get in touch with Brett Pollak for speaking engagements, collaboration, and consulting on AI in higher education.",
    url: "https://brettcpollak.com/contact",
  },
};

export default function Contact() {
  return <ContactContent />;
}