import SkillsGrid from "./skills-grid";
import { Card, CardHeader, CardContent } from "../ui/card";

const SkillsCard = () => {
  return (
    <Card>
      <CardHeader className={"text-xl font-bold"}>Skills</CardHeader>
      <CardContent className="overflow-x-auto px-2">
        <SkillsGrid />
      </CardContent>
    </Card>
  );
};

export default SkillsCard;