import { createFileRoute } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray([".detail", ".contact-social", ".contact-form"]);

      gsap.set("h2", { y: 50, opacity: 0 });
      gsap.set(elements, { x: "100vw", opacity: 0 });

      // Phones: the details + form are taller than one screen, so instead of holding the section
      // pinned they slide in (same animation) as it scrolls through the screen.
      const phone = window.innerWidth <= 900;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: phone ? "top 62%" : "top top",
          end: phone ? "bottom 78%" : "+=3230",
          scrub: phone ? 0.5 : true,
          pin: !phone,
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

      tl.to({}, { duration: 0.4 });
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
      
      const form = event.currentTarget;
      setSending(true);
      setFailed(false);
      fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      .then(res => {
        if (!res.ok) throw new Error(`Contact request failed: ${res.status}`);
        form.reset();
        setSent(true);
        window.setTimeout(() => setSent(false), 4500);
      })
      .catch(err => {
        console.error(err);
        setFailed(true);
      })
      .finally(() => setSending(false));
    }}>
      <div><label>Your Name<input name="name" required /></label><label>Email Address<input name="email" type="email" required /></label><label>Message<textarea name="message" required /></label>
        {sent && (
          <div className="contact-success" role="status" aria-live="polite">
            {Array.from({ length: 16 }).map((_, i) => (
              <i key={i} className="contact-spark" style={{ ["--a" as string]: `${i * (360 / 16)}deg`, ["--d" as string]: `${i % 3 === 0 ? 220 : i % 3 === 1 ? 170 : 120}px`, animationDelay: `${(i % 5) * 60}ms` }} />
            ))}
            <span className="contact-success-text">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 6.3L20.5 10l-6.3 1.7L12 18l-2.2-6.3L3.5 10l6.3-1.7L12 2z" fill="#82e926" /></svg>
              Message sent!
            </span>
          </div>
        )}
        {failed && (
          <p role="alert" style={{ color: "#ff6b6b", marginTop: "12px" }}>
            Sorry, your message could not be sent. Please try again.
          </p>
        )}
      </div>
      <button type="submit" disabled={sending}>Send Message</button>
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
          end: "+=1300",
          scrub: true,
          pin: true,
        },
      });

      tl.from(".line-1", { x: "-100vw", ease: "none", duration: 1 }, 0);
      tl.from(".line-2", { x: "100vw", ease: "none", duration: 1 }, 0);
      tl.to({}, { duration: 0.3 }); // Hold at the end
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

