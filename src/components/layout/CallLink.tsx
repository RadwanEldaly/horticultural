import { siteConfig } from '@/data/site';

interface CallLinkProps {
  className?: string;
  showNumber?: boolean;
  label?: string;
  separator?: string;
  numberClassName?: string;
}

export function CallLink({
  className = '',
  showNumber = false,
  label,
  separator = '·',
  numberClassName = '',
}: CallLinkProps) {
  const { phone } = siteConfig;

  return (
    <a
      href={`tel:${phone.tel}`}
      className={className}
      aria-label={`${label ? `${label}: ` : ''}${phone.display}`}
    >
      {label && <span>{label}</span>}
      {label && showNumber && (
        <span className="opacity-40 select-none mx-2" aria-hidden="true">
          {separator}
        </span>
      )}
      {showNumber && (
        <bdi dir="ltr" className={`inline-block font-mono font-medium tracking-wider ${numberClassName}`}>
          {phone.display}
        </bdi>
      )}
    </a>
  );
}
