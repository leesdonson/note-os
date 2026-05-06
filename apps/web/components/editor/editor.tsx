"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorMenuBar } from "./editor-menubar";
import { Suspense } from "react";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyleKit],
    editorProps: {
      attributes: {
        class: [
          "prose max-w-none focus:outline-none",
          // Headings
          "prose-h1:text-8xl prose-h1:font-extrabold prose-h1:mb-6",
          "prose-h2:text-6xl prose-h2:font-extrabold prose-h2:mt-8",
          "prose-h3:text-4xl prose-h3:font-extrabold prose-h3:mt-6",

          // Text Elements
          "prose-p:text-gray-700 prose-p:leading-relaxed",
          "prose-strong:text-black prose-strong:font-bold",
          "prose-em:italic",
          "prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800",

          // Lists
          "prose-ul:list-disc prose-ul:pl-5",
          "prose-ol:list-decimal prose-ol:pl-5",
          "prose-li:my-2",

          // Quotes & Code
          "prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:italic",
          "prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded",
          "prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4",

          // Media & Misc
          "prose-img:rounded-xl prose-img:shadow-lg",
          "prose-hr:border-t-2 prose-hr:border-gray-200",
          "prose-table:border-collapse prose-th:bg-gray-50",
        ].join(" "),
      },
    },
    content: "<p>Hello World! 🌎️</p><p>Welcome to the Tiptap editor.</p>",
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <Suspense fallback="Loading Editor...">
      <>
        <EditorMenuBar editor={editor} />
        <EditorContent
          className="w-full p-2 border border-neutral-400 rounded-lg min-h-75"
          editor={editor}
        />
      </>
    </Suspense>
  );
}
