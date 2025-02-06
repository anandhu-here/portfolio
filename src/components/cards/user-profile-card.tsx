import { CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from "lucide-react";
import { GlowCard } from "../ui/glow-card/glow-card";
import profilePic from "../../assets/profile-pic.jpeg";

const UserProfileCard = () => {
  const name = "Anandhu Satheesh";
  const description = "Full Stack Engineer";
  const tagline = "Crafting digital experiences with passion and precision";

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <GlowCard className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 to-secondary/10" />

      <CardHeader className="flex flex-col items-center space-y-4 pt-12">
        <div className="relative">
          <Avatar className="h-28 w-28 border-4 border-background shadow-xl">
            <AvatarImage src={profilePic} alt={name} className="object-cover" />
            <AvatarFallback className="text-xl">{initials}</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">{name}</CardTitle>
          <CardDescription className="text-lg font-medium text-primary">
            {description}
          </CardDescription>
          <p className="text-sm text-muted-foreground max-w-sm">
            {tagline}
          </p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/anandhu-here" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/anandhu-satheesh" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col gap-3">
        <a
          href="https://drive.google.com/file/d/1-6EVniYsK1zibNwOV2nHeMlttESkxy2K/view?usp=sharing"
          target="_blank"
          className="w-full"
        >
          <Button className="w-full gap-2">
            <FileText className="h-4 w-4" />
            Download CV
          </Button>
        </a>
      </CardFooter>
    </GlowCard>
  );
};

export default UserProfileCard;