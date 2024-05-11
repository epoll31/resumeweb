"user client";

import useKeyedItems from "../utils/useKeyedItems";
import { EducationEntry, NoId } from "@/lib/types";
import Input from "@/components/ui/Input";
import TrashButton from "./TrashButtons";
import TextArea from "@/components/ui/TextArea";

type PartialEducationEntry = Omit<
  NoId<EducationEntry>,
  "start_date" | "end_date"
> & {
  start_date: Date | undefined;
  end_date: Date | undefined;
};
export default function EducationSection({
  educationEntries,
}: {
  educationEntries: EducationEntry[];
}) {
  const {
    items: educationKeys,
    addItem: addEducation,
    removeItem: removeEducation,
  } = useKeyedItems<PartialEducationEntry>(
    educationEntries.map((entry) => ({
      ...entry,
      end_date: entry.end_date ? entry.end_date : undefined,
    })),
    {
      school: "",
      degree: "",
      major: "",
      description: "",
      start_date: undefined,
      end_date: undefined,
    }
  );

  return (
    <div className="flex flex-col gap-4">
      <p>Education:</p>
      {educationKeys.map((item, index) => (
        <div key={item.key} className="flex flex-col relative">
          <p className="text-center">Education {index + 1}</p>
          <label htmlFor={`education-school-${item.key}`}>School:</label>
          <Input
            className="w-full"
            id={`education-school-${item.key}`}
            name={`education-school-${item.key}`}
            defaultValue={item.value.school}
            required
          />
          <label htmlFor={`education-degree-${item.key}`}>Degree:</label>
          <Input
            className="w-full"
            id={`education-degree-${item.key}`}
            name={`education-degree-${item.key}`}
            defaultValue={item.value.degree}
            required
          />
          <label htmlFor={`education-major-${item.key}`}>Major:</label>
          <Input
            className="w-full"
            id={`education-major-${item.key}`}
            name={`education-major-${item.key}`}
            defaultValue={item.value.major || ""}
          />
          <label htmlFor={`education-description-${item.key}`}>
            Description:
          </label>
          <TextArea
            className="h-32"
            id={`education-description-${item.key}`}
            name={`education-description-${item.key}`}
            defaultValue={item.value.description}
            required
          />
          <label htmlFor={`education-start_date-${item.key}`}>
            Start Date:
          </label>
          <Input
            className="w-full"
            id={`education-start_date-${item.key}`}
            name={`education-start_date-${item.key}`}
            type="month"
            defaultValue={
              item.value.start_date &&
              item.value.start_date.toISOString().slice(0, 7)
            }
            required
          />
          <label htmlFor={`education-end_date-${item.key}`}>End Date:</label>
          <Input
            className="w-full"
            id={`education-end_date-${item.key}`}
            name={`education-end_date-${item.key}`}
            type="month"
            defaultValue={
              item.value.end_date &&
              item.value.end_date.toISOString().slice(0, 7)
            }
          />
          <TrashButton onClick={() => removeEducation(item.key)} />
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="w-full text-center"
      >
        Add Education
      </button>
    </div>
  );
}