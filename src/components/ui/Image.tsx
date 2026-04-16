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
      className={`bg-charcoal/10 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
      } ${className}`}
      {...props}
    />
  );
}
