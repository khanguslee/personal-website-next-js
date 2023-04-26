import Link from 'next/link';
import type { IconType } from 'react-icons';

type LinkIconProps = {
  link: string;
  Icon: IconType;
  className?: string;
};

function LinkIcon(props: LinkIconProps) {
  const { Icon, link, className } = props;
  return (
    <Link href={link} target="_blank">
      <Icon
        className={`inline-block text-dracula-light-100 hover:text-dracula-light-700 duration-500 ${className}`}
      />
    </Link>
  );
}

export default LinkIcon;
