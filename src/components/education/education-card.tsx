import React from "react";
import EducationInfo from "./education-info";
import { Card, CardHeader, CardContent } from "../ui/card";
import { GraduationCap, University } from "lucide-react";

const infoArr: Array<{
  title: string;
  dateRange: string;
  description: string;
  icon: React.ReactNode;
}> = [
    {
      title: "M.Sc. Electrical Power and Energy Systems (First Class)",
      dateRange: "2021-2023",
      description: "Teesside University, Middlesbrough, UK",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "B.Tech. Electrical and Electronics Engineering",
      dateRange: "2015-2019",
      description: "College of Engineering, Kidangoor, India",
      icon: <University className="h-8 w-8 text-primary" />,
    },
  ];

const EducationCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="text-xl font-bold">Education</CardHeader>
      <CardContent>
        {infoArr.map((info, i) => (
          <div key={i}>
            <EducationInfo {...info} />
            {i !== infoArr.length - 1 && <hr className="my-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
