import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import gsap from "gsap";

export default function AIChat({ disableAnimations = false }: { disableAnimations?: boolean }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disableAnimations || !windowRef.current || !open) return;

    gsap.fromTo(
      windowRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      }
    );
  }, [disableAnimations, open]);

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="
          fixed
          bottom-4
          right-4
          sm:bottom-8
          sm:right-8
          z-[999999]
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-[#8AF500]
          flex
          items-center
          justify-center
          transition-transform
          hover:scale-110
        "
      >
        {open ? (
          <X className="text-black" size={28} />
        ) : (
          <MessageSquare className="text-black" size={28} />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          ref={windowRef}
          className="
            fixed
            bottom-24
            right-4
            sm:right-8
            z-[999998]
            h-[min(520px,calc(100dvh-7rem))]
            sm:h-auto
            sm:min-h-[520px]
            w-[calc(100vw-2rem)]
            max-w-[380px]
            rounded-3xl
            bg-white/[0.06]
            backdrop-blur-3xl
            border
            border-white/40
            shadow-[0_8px_40px_rgba(0,0,0,.45)]
            border
            border-white/10
            overflow-hidden
            shadow-[0_0_60px_rgba(0,0,0,.5)]
          "
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 h-16">
            <div>
              <h3 className="text-white font-semibold">
                Asteri AI
              </h3>
              <p className="text-[#8AF500] text-sm">
                Online
              </p>
            </div>

            <button onClick={() => setOpen(false)}>
              <X className="text-white" size={20} />
            </button>
          </div>

          <div className="h-[calc(100%-7rem)] overflow-y-auto p-5 sm:h-[470px]">
            <div className="bg-[#8AF500]/10 rounded-2xl p-4 text-white max-w-full">
              👋 Hello!
              <br />
              I'm Asteri AI.
              <br />
              Ask me anything about our services.
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full border-t border-white/50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
                className="
                  flex-1
                  rounded-full
                  bg-[#222]
                  px-4
                  py-3
                  text-white
                  outline-none
                "
              />

              <button
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#8AF500]
                  flex
                  items-center
                  justify-center
                "
              >
                <Send className="text-black" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
