"use client";

import React from "react";
import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import { menuBarStateSelector } from "./editor-menubar-state";

export const EditorMenuBar = ({ editor }: { editor: Editor | null }) => {
  const editorState = useEditorState({
    editor: editor as Editor,
    selector: menuBarStateSelector,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="bg-neutral-200 rounded-lg p-3 mb-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={editorState.isBold ? "active" : "default"}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={editorState.isItalic ? "active" : "default"}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={editorState.isStrike ? "active" : "default"}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editorState.canCode}
          className={editorState.isCode ? "active" : "default"}
        >
          Code
        </button>
        <button
          className="bg-neutral-50 rounded-md p-2"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          Clear marks
        </button>
        <button
          className="bg-neutral-50 rounded-md p-2"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editorState.isParagraph ? "active" : "default"}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={editorState.isHeading1 ? "active" : "default"}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editorState.isHeading2 ? "active" : "default"}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={editorState.isHeading3 ? "active" : "default"}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={editorState.isHeading4 ? "active" : "default"}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={editorState.isHeading5 ? "active" : "default"}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={editorState.isHeading6 ? "active" : "default"}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? "active" : "default"}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? "active" : "default"}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editorState.isCodeBlock ? "active" : "default"}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editorState.isBlockquote ? "active" : "default"}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="bg-neutral-50 rounded-md p-2"
        >
          Horizontal rule
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="bg-neutral-50 rounded-md p-2"
        >
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
          className="bg-neutral-50 rounded-md p-2"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
          className="bg-neutral-50 rounded-md p-2"
        >
          Redo
        </button>
      </div>
    </div>
  );
};
