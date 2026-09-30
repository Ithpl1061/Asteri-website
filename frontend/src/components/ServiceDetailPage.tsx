import { CTA, GlassCard, PageHero, PageShell, Section } from "@/components/PageShell";
import "./ServiceDetailPage.css";

type ServiceDetailPageProps = {
  title: string;
  subtitle: string;
  description: string;
  capabilities: readonly string[];
  pageClassName?: string;
};

export function ServiceDetailPage({
  title,
  subtitle,
  description,
  capabilities,
  pageClassName,
}: ServiceDetailPageProps) {
  return (
    <PageShell>
      <div className={pageClassName}>
        <div className="service-detail-hero">
          <PageHero eyebrow="Asteri services" title={title} subtitle={subtitle} />
        </div>

        <div className="service-detail-intro">
          <Section eyebrow="How we help" title="Built around your business." description={description} />
        </div>

        <div className="service-detail-capabilities">
          <Section eyebrow="Capabilities" title="What we deliver">
            <div className="grid gap-4 md:grid-cols-3">
              {capabilities.map((capability, index) => (
                <GlassCard key={capability}>
                  <span className="text-sm text-primary">0{index + 1}</span>
                  <h3 className="mt-8 text-2xl font-medium">{capability}</h3>
                </GlassCard>
              ))}
            </div>
          </Section>
        </div>

        <div className="service-detail-cta">
          <CTA
            title={`Letâ€™s discuss your ${title.toLowerCase()} needs.`}
            primaryLabel="Start a conversation"
          />
        </div>
      </div>
    </PageShell>
  );
}
