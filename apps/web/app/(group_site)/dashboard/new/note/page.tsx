import { Editor } from "@/components/editor/editor";

export default function NewNotePage() {
  return (
    <div className="w-full">
      <div className="h-15 w-full" />
      <div className="w-full shadow-lg rounded-xl max-w-5xl p-4 mx-auto">
        <Editor />
      </div>
    </div>
  );
}
