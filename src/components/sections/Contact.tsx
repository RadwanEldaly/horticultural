import { type Locale } from '@/lib/i18n';
import { siteConfig } from '@/data/site';
import { CallLink } from '../layout/CallLink';
import { WhatsAppButton } from '../layout/WhatsAppButton';
import { Reveal } from '../motion/Reveal';

interface ContactProps {
  lang?: Locale;
  dictionary: {
    sectionTag?: string;
    heading: string;
    callLabel: string;
    callCta?: string;
    whatsappCta?: string;
    city: string;
    note?: string;
    footerNote?: string;
  };
}

export function Contact({ lang = 'ar', dictionary }: ContactProps) {
  const { phone } = siteConfig;
  const isRtl = lang === 'ar';

  return (
    <section id="contact" className="px-[var(--spacing-margin)] py-[var(--spacing-section)] bg-[var(--color-paper-2)]/40 border-b border-[var(--color-hairline)]">
      <div className="mx-auto max-w-[var(--container-wrap)]">
        
        <div className="border border-[var(--color-hairline)] bg-[var(--color-paper)] p-8 sm:p-12 md:p-16 shadow-sm">
          <Reveal index={0} className="flex flex-col items-start gap-5 max-w-3xl">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-stone)]">
              <span className="font-mono text-[var(--color-clay)]">06</span>
              <span>/</span>
              <span>{dictionary.sectionTag || (isRtl ? 'الاستفسار والاتصال المباشر' : 'Direct Inquiries')}</span>
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.85rem,1.4rem+1.8vw,3rem)] text-[var(--color-ink)] leading-tight">
              {dictionary.callLabel}
            </h2>

            {dictionary.note && (
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                {dictionary.note}
              </p>
            )}

            {/* Giant Monograph Serif Phone Call Link */}
            <div className="my-6 border-y border-[var(--color-hairline)] py-6 w-full">
              <CallLink
                showNumber
                className="group block font-[family-name:var(--font-serif)] text-[clamp(2.35rem,1.6rem+4vw,5rem)] font-light leading-none text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
                numberClassName="tracking-wider text-[var(--color-foliage)] group-hover:text-[var(--color-clay)] transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between w-full gap-5 text-xs">
              {/* City & Service Location Badge */}
              <div className="flex items-center gap-2.5 text-[var(--color-stone)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-foliage)] animate-pulse shrink-0" aria-hidden="true" />
                <span className="font-medium text-[var(--color-ink)]">{dictionary.city}</span>
              </div>

              {/* Direct Actions: Phone Call & WhatsApp */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <CallLink
                  label={dictionary.callCta || (isRtl ? 'اتصل الآن' : 'Call Directly')}
                  className="inline-flex items-center justify-center border border-[var(--color-foliage)] bg-[var(--color-foliage)] px-6 py-3.5 text-xs uppercase tracking-wider text-[var(--color-paper)] shadow-sm transition-all hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-foliage)]"
                />
                <WhatsAppButton
                  mode="inline"
                  label={dictionary.whatsappCta || (isRtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp')}
                  className="py-3.5"
                />
              </div>
            </div>

            {!phone.confirmed && (
              <span className="mt-2 text-[11px] text-[var(--color-stone)] opacity-75">
                {dictionary.footerNote || (isRtl ? 'خط اتصال وواتساب مباشر لخدمات المشاتل وتنسيق الحدائق بالرياض' : 'Direct phone and WhatsApp line for on-site nursery and landscape services in Riyadh')}
              </span>
            )}

          </Reveal>
        </div>

      </div>
    </section>
  );
}
