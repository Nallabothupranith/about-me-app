"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      {/* The original, clickable image */}
      <div className="cursor-pointer" onClick={toggleZoom}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(className)}
        />
      </div>

      {/* The full-screen zoomed overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fade-in"
          onClick={toggleZoom}
        >
          <div className="relative animate-zoom-in w-full h-full flex items-center justify-center">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
