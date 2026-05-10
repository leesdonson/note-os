"use client";

import React from "react";
import type { Editor } from "@tiptap/core";
import {
  Bold,
  Braces,
  CaseSensitive,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Minus,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";

import { Toggle } from "../ui/toggle";

export const EditorMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const menubarItems = [
    {
      icon: <CaseSensitive className="w-8 h-8" />,
      pressed: editor.isActive("paragraph"),
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      icon: <Bold className="w-8 h-8" />,
      pressed: editor.isActive("bold"),
      onClick: () => editor.chain().focus().toggleBold().run(),
      active: "canBold",
    },
    {
      icon: <Italic className="w-8 h-8" />,
      pressed: editor.isActive("italic"),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: <Minus className="w-8 h-8" />,
      pressed: editor.isActive("horizontalRule"),
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      icon: <Strikethrough className="w-8 h-8" />,
      pressed: editor.isActive("strike"),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      icon: <TextAlignStart className="w-8 h-8" />,
      pressed: editor.isActive("left", { textAlign: "left" }),
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
    },
    {
      icon: <TextAlignCenter className="w-8 h-8" />,
      pressed: editor.isActive("center", { textAlign: "center" }),
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
    },
    {
      icon: <TextAlignJustify className="w-8 h-8" />,
      pressed: editor.isActive("justify", { textAlign: "justify" }),
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
    },
    {
      icon: <TextAlignEnd className="w-8 h-8" />,
      pressed: editor.isActive("right", { textAlign: "right" }),
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
    },

    {
      icon: <Code className="w-8 h-8" />,
      pressed: editor.isActive("code"),
      onClick: () => editor.chain().focus().toggleCode().run(),
    },
    {
      icon: <Braces className="w-8 h-8" />,
      pressed: editor.isActive("codeblock"),
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
    },

    {
      icon: <Heading1 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 1 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      icon: <Heading2 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 2 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      icon: <Heading3 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 3 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      icon: <Heading4 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 4 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      icon: <Heading5 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 5 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
    },
    {
      icon: <Heading6 className="w-8 h-8" />,
      pressed: editor.isActive("heading", { level: 6 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
    },
    {
      icon: <List className="w-8 h-8" />,
      pressed: editor.isActive("bulletList"),
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: <ListOrdered className="w-8 h-8" />,
      pressed: editor.isActive("orderedList"),
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      icon: <Quote className="w-8 h-8" />,
      pressed: editor.isActive("blockquote"),
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      icon: <Redo className="w-8 h-8" />,
      pressed: editor.isActive("redo"),
      onClick: () => editor.chain().focus().redo().run(),
    },
    {
      icon: <Undo className="w-8 h-8" />,
      pressed: editor.isActive("undo"),
      onClick: () => editor.chain().focus().undo().run(),
    },
  ];

  return (
    <div className="bg-neutral-200 border border-blue-700 rounded-lg p-3 mb-4">
      <div className="flex items-center overflow-y-auto no-scrollbar scroll-smooth gap-2">
        {menubarItems.map((option, index) => (
          <Toggle
            className="border border-neutral-400 rounded-lg"
            key={index}
            pressed={option.pressed}
            onPressedChange={option.onClick}
          >
            {option.icon}
          </Toggle>
        ))}
      </div>
    </div>
  );
};
