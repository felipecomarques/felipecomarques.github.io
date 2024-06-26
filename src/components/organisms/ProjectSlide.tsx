import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../atoms/ui/carousel";
import ProjectsData from "../../assets/data/ProjectsData";
import ProjectsCard from "../molecules/ProjectsCard"

function ProjectSlide() {
    return (
        <Carousel opts={{
            align: "start",
        }} className="w-full">
            <CarouselContent>
                {ProjectsData().map((project) =>
                    <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProjectsCard {...project} />
                    </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
        </Carousel>
    );
}

export default ProjectSlide;