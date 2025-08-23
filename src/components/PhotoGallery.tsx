import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
const galleryImages = ["/lovable-uploads/b155b82c-93c9-4fd8-ab42-e76e0a4773d0.png", "/lovable-uploads/d4193b1d-d53b-4176-b40c-89d37945c89a.png", "/lovable-uploads/ec2b7cbe-034d-44cb-8df6-bad5b5b519dd.png", "/lovable-uploads/57ef61df-86a4-49a9-ab69-c3f4bcfea42d.png", "/lovable-uploads/a96f54e9-86d7-4629-8bb0-5790aab21fe6.png", "/lovable-uploads/7f7afe2c-3945-47d1-9219-5eaf754adf91.png", "/lovable-uploads/1c71f479-1d8d-4cd7-b1a1-90d3a9792594.png", "/lovable-uploads/bc89bc1e-59f2-4882-9233-bc1fe078e10b.png", "/lovable-uploads/4970a248-4262-437c-8d56-3aa45ff1ea05.png", "/lovable-uploads/d060b2cd-95d5-41b8-86cd-3f3e1a60885f.png", "/lovable-uploads/0a9a40fc-f9b9-4c8a-8e94-cdae242a5380.png", "/lovable-uploads/2e4c1762-14af-438d-889e-e1b704b88a05.png", "/lovable-uploads/5d9aef46-4b83-4559-baaf-1fcd78ce9bf5.png", "/lovable-uploads/82a4adc6-75bd-4607-a7f7-6db565f2ff72.png", "/lovable-uploads/36385894-6903-4d77-b306-baebf6a1cd49.png"];
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
  return <section className="py-12 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-aqua">Lab Solutions</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual tour of our state-of-the-art laboratory equipment and training solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true
              })
            ]}
          >
            <CarouselContent className="-ml-1">
              {Array.from({
              length: Math.ceil(galleryImages.length / 6)
            }).map((_, slideIndex) => <CarouselItem key={slideIndex} className="pl-1">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                    {galleryImages.slice(slideIndex * 6, slideIndex * 6 + 6).map((image, imageIndex) => {
                  const globalIndex = slideIndex * 6 + imageIndex;
                  return <div 
                    key={globalIndex} 
                    className="relative group aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg" 
                    onClick={() => openLightbox(image, globalIndex)}
                  >
                          <img 
                            src={image} 
                            alt={`Lab equipment ${globalIndex + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-aqua/50 rounded-lg transition-colors duration-300" />
                        </div>;
                })}
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-8 md:-left-12 bg-white/90 hover:bg-white border shadow-lg" />
            <CarouselNext className="-right-8 md:-right-12 bg-white/90 hover:bg-white border shadow-lg" />
          </Carousel>
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(galleryImages.length / 6) }).map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <div className="relative">
              <img src={selectedImage || ""} alt="Gallery lightbox" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              
              {/* Navigation buttons */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Close button */}
              <button onClick={closeLightbox} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                ✕
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};