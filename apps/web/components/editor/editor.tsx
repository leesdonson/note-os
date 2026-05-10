"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorMenuBar } from "./editor-menubar";
import { Suspense } from "react";
import "./editor.css";
import { Loading } from "../shared/loading";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyleKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class: "outline-none border-none",
      },
    },
    content: "",
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <Suspense fallback={<Loading classname="h-130" text="Loading Editor..." />}>
      <div className=" w-full">
        <div className="h-14 md:h-15 w-full" />
        <div className="absolute  max-w-5xl mx-auto w-full top-17 md:top-20 z-20">
          <EditorMenuBar editor={editor} />
        </div>
        <EditorContent
          className="w-full py-3 px-4 border border-neutral-400 rounded-lg min-h-75"
          editor={editor}
        />
      </div>
    </Suspense>
  );
}
