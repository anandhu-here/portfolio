
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import ProjectCard from "./project-card";
import wyecareThumbnail from "../../assets/wyecare.png";

const FeatProjectsCard = () => {
  return (
    <Card>
      <CardHeader className={"text-xl font-bold"}>Featured Projects</CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <ProjectCard key={0} url="https://wyecaresolutions.com" imageUrl={wyecareThumbnail} />
      </CardContent>
      <CardFooter className="flex justify-end pl-1">
        {/* <a href="https://github.com/armypele1" target="_blank" rel="noopener noreferrer" className="flex gap-2">
          <Button variant={"link"} className="flex gap-2 items-end">
            View All
          </Button>
        </a> */}
      </CardFooter>
    </Card>
  );
};

export default FeatProjectsCard;
