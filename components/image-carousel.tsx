"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  images: string[]
  title?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function ImageCarousel({
  images,
  title,
  autoPlay = true,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlay, images.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index % images.length)
    setIsAutoPlay(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlay(false)
  }

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => autoPlay && setIsAutoPlay(true)}
    >
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}

      {/* Main Image Display */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
        <div className="relative aspect-video w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-foreground backdrop-blur-sm transition-all hover:bg-primary"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-foreground backdrop-blur-sm transition-all hover:bg-primary"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}  
              className={cn(
                "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300",
                index === currentIndex
                  ? "border-primary ring-2 ring-primary/50"
                  : "border-primary/30 hover:border-primary/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}