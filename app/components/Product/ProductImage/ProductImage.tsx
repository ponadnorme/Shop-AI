'use client';

import {ProductImageElement} from './styles';
import Link from 'next/link';
import {HTMLAttributes, SyntheticEvent} from 'react';
import {ImageVariantType} from '@/app/store/api/types';

const handleProductImageError = (event: SyntheticEvent): void => {
  const element: HTMLImageElement = event.currentTarget as HTMLImageElement;
  element.srcset = process.env.NEXT_PUBLIC_PRODUCT_FALLBACK_IMAGE as string;
};

type ProductImageProps = {
  alt?: string,
  images: Array<ImageVariantType> | null,
  linkTo?: string,
  onClick?: () => void,
} & HTMLAttributes<HTMLImageElement>

const ProductImage = ({alt = '', images, linkTo, onClick, ...props}: ProductImageProps) => {
  const getOriginalImageVariant = ({images}: {
    images: Array<ImageVariantType>,
  }) => {
    const foundVariant = images.filter((element) => {
      return element.variant === 'original';
    });

    if (foundVariant.length === 0) {
      return null;
    }

    return foundVariant[0];
  };

  const fallbackImageVariant = () => {
    return {
      variant: 'fallback',
      url: process.env.NEXT_PUBLIC_PRODUCT_FALLBACK_IMAGE,
    };
  };

  const getImageVariant = ({images}: {
    images: Array<ImageVariantType>,
  }) => {
    const originalImageVariant = getOriginalImageVariant({
      images: images,
    });

    if (originalImageVariant) {
      return originalImageVariant;
    }

    return fallbackImageVariant();
  };

  const imageVariant = images == null
    ? fallbackImageVariant()
    : getImageVariant({
      images: images,
    });
  const structuredDataImageVariant = images == null
    ? fallbackImageVariant()
    : getImageVariant({
      images: images,
    });
  const structuredDataImageUrl = structuredDataImageVariant.url;

  const srcSet = `${imageVariant.url} 1x`;

  let imageProps: any = {};

  if (!!onClick) {
    imageProps['onClick'] = onClick;
  }

  const element = <figure>
    <ProductImageElement
      loading="lazy"
      alt={alt}
      src={process.env.NEXT_PUBLIC_PRODUCT_FALLBACK_IMAGE}
      srcSet={srcSet}
      onError={(event) => {
        handleProductImageError(event);
      }}
      {...props}
      {...imageProps}
    />
  </figure>;

  return (
    <>
      {!!linkTo ? (
        <Link
          href={linkTo}
        >
          {element}
        </Link>
      ) : (
        element
      )}
      <meta itemProp="image" content={structuredDataImageUrl}/>
    </>
  );
};

export default ProductImage;
