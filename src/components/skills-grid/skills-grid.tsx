
// SkillsGrid.jsx
import { TooltipProvider } from "../ui/tooltip";
import SkillIcon from "./skill-icon";
import SkillsGroup from "./skills-group";

const languages = ["typescript", "javascript", "python", "bash"];
const frontend = ["html5", "css3", "react", "capacitor", "redux", "materialui", "tailwindcss"];
const technologies = [
  "git",
  "github",
  "githubactions",
  "terraform",
  "googlecloud",
  "firebase",
  "docker",
  "pytorch",
  "android",
  "apple",
  "unity",
  "blender",
];
const backend = [
  "nodejs",
  "express",
  "nestjs",
  "swagger",
  "postgresql",
  "sqlite",
  "redis",
  "mongodb",
];

const baseDelay = 0;
const delayIncrease = 50;

const SkillsGrid = () => {
  const categories = [
    { title: "Technologies", items: technologies },
    { title: "Backend", items: backend },
    { title: "Languages", items: languages },
    { title: "Frontend", items: frontend },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-col gap-4">
        {categories.map(({ title, items }) => (
          <SkillsGroup key={title} title={title}>
            {items.map((item, idx) => (
              <SkillIcon key={item} name={item} delay={baseDelay + idx * delayIncrease} />
            ))}
          </SkillsGroup>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SkillsGrid;

