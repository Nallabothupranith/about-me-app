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
          className={cn(
            "transition-opacity duration-300",
            isZoomed ? "opacity-0" : "opacity-100",
            className
          )}
        />
      </div>

      {/* The full-screen zoomed overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fade-in"
          onClick={toggleZoom}
        >
          <div className="relative animate-zoom-in">
            <Image
              src={src}
              alt={alt}
              width={width * 3}
              height={height * 3}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
