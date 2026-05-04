import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";

const dummyData = [
  {
    id: 1,
    name: "Folder 1",
    icon: Folder,
    notes: [
      { id: 1, title: "Note 1" },
      { id: 2, title: "Note 2" },
    ],
  },
  {
    id: 2,
    name: "Folder 2",
    icon: Folder,
    notes: [
      { id: 3, title: "Note 3" },
      { id: 4, title: "Note 4" },
    ],
  },
  {
    id: 3,
    name: "Folder 3",
    icon: Folder,
    notes: [
      { id: 5, title: "Note 5" },
      { id: 6, title: "Note 6" },
    ],
  },
  {
    id: 4,
    name: "Folder 4",
    icon: Folder,
    notes: [
      { id: 7, title: "Note 7" },
      { id: 8, title: "Note 8" },
    ],
  },
  {
    id: 5,
    name: "Folder 5",
    icon: Folder,
    notes: [
      { id: 7, title: "Note 9" },
      { id: 8, title: "Note 10" },
    ],
  },
  {
    id: 6,
    name: "Folder 6",
    icon: Folder,
    notes: [
      { id: 7, title: "Note 11" },
      { id: 8, title: "Note 12" },
    ],
  },
  {
    id: 7,
    name: "Folder 7",
    icon: Folder,
    notes: [
      { id: 7, title: "Note 13" },
      { id: 8, title: "Note 14" },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full h-screen">
      {/* add height to keep content down */}
      <div className="h-16 w-full"></div>
      {/* dashboard nav */}
      <div className="mt-4 sm:hidden flex gap-2">
        <Button className="rounded p-4">Create Folder</Button>
        <Button className="rounded p-4">Add New Note</Button>
      </div>
      {/* main content section */}
      <div className="mt-4">
        <div className="grid grid-cols-6 md:grid-cols-8 gap-4 ">
          {dummyData.map((folder) => (
            <div
              key={folder.id}
              className="flex shadow-md items-center justify-center rounded-md flex-col gap-2 p-2"
            >
              <folder.icon size={35} />
              <h2 className="text-lg font-semibold">{folder.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
