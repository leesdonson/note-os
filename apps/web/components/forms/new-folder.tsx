"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function NewFolderForm() {
  const router = useRouter();
  const navigate = () => {
    router.push("/dashboard");
  };

  return (
    <form className="p-4 flex flex-col w-full max-w-2xl mx-auto shadow-lg border border-neutral-200 rounded-lg">
      <h3 className="mb-4 text-lg font-semibold">New Folder</h3>
      <input
        type="text"
        name="name"
        className="border border-blue-700 text-lg focus:outline-blue-700 rounded p-2 mb-5"
        placeholder="Folder name"
      />
      <div className="flex gap-5">
        <Button
          className="rounded bg-green-700 hover:bg-green-500 transition duration-300 ease-in-out text-lg font-semibold py-5 px-4 cursor-pointer w-1/3"
          type="submit"
        >
          Create
        </Button>
        <Button
          className="rounded bg-red-700 hover:bg-red-500 transition duration-300 ease-in-out text-lg font-semibold py-5 px-4 cursor-pointer w-1/3"
          type="button"
          onClick={navigate}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
