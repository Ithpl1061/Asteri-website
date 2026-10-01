import { createFileRoute } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.css";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Asteri" }] }),
  component: ContactPage,
});

function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.set("h1 span", { y: 80, opacity: 0 });
      gsap.set("p", { y: 60, opacity: 0 });

      const tl = gsap.timeline();
      tl.to("h1 span", { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }, 0.2)
        .to("p", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <section className="contact-hero" ref={heroRef}>
    <h1 className="type-display"><span><i>Got a</i> Project</span><span>In Mind? <i>Let's Talk.</i></span></h1>
    <p className="type-lead font-semibold">We respond within 24 hours.</p>
  </section>;
}

function ContactInformation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray([".detail", ".contact-social", ".contact-form"]);

      gsap.set("h2", { y: 50, opacity: 0 });
      gsap.set(elements, { x: "100vw", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to("h2", {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      tl.to(elements, {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
      });

      tl.to({}, { duration: 1.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return <section className="contact-information" ref={sectionRef}>
    <h2 className="type-title">CONTACT INFORMATION</h2>
    <div className="contact-details">
      <div className="detail detail-email"><b>Email:</b><span>Info@asteritechnology.com</span></div>
      <div className="detail detail-phone"><b>Phone:</b><span>
        <img src="https://flagcdn.com/w40/in.png" alt="India" style={{ display: "inline-block", width: "26px", verticalAlign: "middle", marginRight: "8px", marginTop: "-3px", borderRadius: "2px" }} />India: +91 20 35609326<br />
        <img src="https://flagcdn.com/w40/ca.png" alt="Canada" style={{ display: "inline-block", width: "26px", verticalAlign: "middle", marginRight: "8px", marginTop: "-3px", borderRadius: "2px" }} />Canada: +1 302 319 9898
      </span></div>
      <div className="detail detail-address"><b>Address:</b><span>5th floor Innovative Tower, Sr No. 15, Plot No P7, Near Kharadi KNO, Pune 411014, Pune, Maharashtra 411028</span></div>
      <div className="contact-social" id="social-links"><b>Social Media</b><div><a href="#social-links" aria-label="LinkedIn"><Linkedin /></a><a href="#social-links" aria-label="Instagram"><Instagram /></a><a href="#social-links" aria-label="YouTube"><Youtube /></a></div></div>
    </div>
    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      .then(res => res.json())
      .then(() => {
        alert('Message sent successfully!');
        (event.target as HTMLFormElement).reset();
      })
      .catch(console.error);
    }}>
      <div><label>Your Name<input name="name" required /></label><label>Email Address<input name="email" type="email" required /></label><label>Message<textarea name="message" required /></label></div>
      <button type="submit">Send Message</button>
    </form>
  </section>;
}

function ContactConversation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
        },
      });

      tl.from(".line-1", { x: "-100vw", ease: "none", duration: 1 }, 0);
      tl.from(".line-2", { x: "100vw", ease: "none", duration: 1 }, 0);
      tl.to({}, { duration: 0.5 }); // Hold at the end
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return <section className="contact-conversation" ref={sectionRef}>
    <h2 className="type-title">
      <span className="line-1" style={{ display: "block", textAlign: "left", width: "100%" }}>Every solution starts</span>
      <span className="line-2" style={{ display: "block", textAlign: "left", width: "100%" }}>with a conversation.</span>
    </h2>
  </section>;
}

function ContactPage() {
  return <main className="contact-page"><Navbar /><div className="contact-frame"><ContactHero /><ContactInformation /><ContactConversation /></div><Footer /></main>;
}

