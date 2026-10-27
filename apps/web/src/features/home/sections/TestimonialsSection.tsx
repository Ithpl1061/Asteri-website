import type { RefObject } from "react";

type TestimonialsSectionProps = {
  testimonialsRef: RefObject<HTMLDivElement | null>;
};

export function TestimonialsSection({ testimonialsRef }: TestimonialsSectionProps) {
  return (
    <section
      ref={testimonialsRef}
      className="testimonials-section relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:h-screen lg:min-h-0"
    >
      <div className="flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 py-16 sm:min-h-[100dvh] lg:h-full lg:min-h-0 lg:gap-10">
        <h2 className="testimonials-title text-center font-display type-title uppercase text-white lg:whitespace-nowrap">
          TESTIMONIALS
        </h2>

        <div className="testimonial-card relative mx-auto w-full max-w-xl rounded-[24px] bg-[#d9d9d9d5] p-5 sm:rounded-[40px] sm:p-10">
          <p className="type-lead text-black">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae
            pellentesque sem placerat in. Cursus mi pretium tellus duis convallis tempus leo.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-black shrink-0" />
            <div>
              <h3 className="type-lead font-bold text-black">Lorem Ipsum</h3>
              <p className="type-body text-black">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
