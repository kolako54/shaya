import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselPic = () => {
  const imgs = [
    "/carousel/guitar.png",
    "/carousel/tailoring.png",
    "/carousel/painter.png",
  ];
  console.log(imgs);

  return (
    <div className="flex w-full items-center justify-center">
      <Carousel className="w-[45%] border-4 border-bgSecondary">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 shadow-2xl">
                {/* <div> */}
                <div className="flex aspect-[2/1] items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
                {/* </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselPic;
