import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/lovable-uploads/b155b82c-93c9-4fd8-ab42-e76e0a4773d0.png",
  "/lovable-uploads/d4193b1d-d53b-4176-b40c-89d37945c89a.png", 
  "/lovable-uploads/ec2b7cbe-034d-44cb-8df6-bad5b5b519dd.png",
  "/lovable-uploads/57ef61df-86a4-49a9-ab69-c3f4bcfea42d.png",
  "/lovable-uploads/a96f54e9-86d7-4629-8bb0-5790aab21fe6.png"
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Labs Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art laboratories and training facilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid grid-cols-2 gap-4">
                    {galleryImages.slice(slideIndex * 4, slideIndex * 4 + 4).map((image, imageIndex) => {
                      const globalIndex = slideIndex * 4 + imageIndex;
                      return (
                        <div
                          key={globalIndex}
                          className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
                          onClick={() => openLightbox(image, globalIndex)}
                        >
                          <img
                            src={image}
                            alt={`Lab gallery image ${globalIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <div className="relative">
              <img
                src={selectedImage || ""}
                alt="Gallery lightbox"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};