import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function MenuCourseContent({ course }) {
  const [openSection, setOpenSection] = React.useState(null);

  const handleOpen = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {course.title}
        </Typography>
      </div>
      <List>
        {course.sections.map((section) => (
          <Accordion
            key={section.idsection}
            open={openSection === section.idsection}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${openSection === section.idsection ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="p-0" selected={openSection === section.idsection}>
              <AccordionHeader
                onClick={() => handleOpen(section.idsection)}
                className="border-b-0 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-left" // Added text-left here
                >
                  {section.titlesection}
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                {section.elements.map((element) => (
                  <ListItem key={element.idelement}>
                    <ListItemPrefix>
                      <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray">
                      {element.titleelement}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          </Accordion>
        ))}
      </List>
    </Card>
  );
}
