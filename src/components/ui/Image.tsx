import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className = '', ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-700 bg-charcoal/5 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    />
  );
}
