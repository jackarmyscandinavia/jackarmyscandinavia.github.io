import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import style from 'src/styles/components/cover-image.module.scss';

type Props = {
  className?: string;
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ className, title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(style.image, !!slug && style.hasSlug)}
      width={1300}
      height={630}
    />
  );
  return (
    <div className={cn(className, style.coverImage)}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
