import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./components/theme-provider";
import EducationCard from "./components/education/education-card";
import ExperienceTree from "./components/experience-tree/experience-tree";
import ContactCard from "./components/cards/contact-card";
import FeatProjectsCard from "./components/projects/feat-projects-card";
import SkillsCard from "./components/skills-grid/skills-card";
import UserProfileCard from "./components/cards/user-profile-card";
import ModeToggle from "./components/buttons/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="xl:container mx-auto p-5">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div id="section-1" className="w-full lg:w-[400px] flex flex-col gap-4">
            <UserProfileCard />
            <SkillsCard />
          </div>
          <div id="section-2" className="flex flex-1 flex-col gap-4 min-w-0">
            <ExperienceTree />
            <FeatProjectsCard />
            <div className="flex gap-4 flex-col lg:flex-row">
              <EducationCard />
              <ContactCard />
            </div>
          </div>
        </div>
        <div className="xl:container ml-auto flex gap-2 items-center justify-center lg:justify-end mt-5 text-muted-foreground">
          <p className="text-muted-foreground">©2024 Anandhu Satheesh</p>
          {/* <img src={"bobomb.gif"} className="h-8 w-8 no-aliasing mt-[1px]" /> */}
        </div>
      </div>
      <Toaster />
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
