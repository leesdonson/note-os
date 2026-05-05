"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Folder name is required"),
});
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
export function NewFolderForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  });
  const navigate = () => {
    router.push("/dashboard");
  };

  // submit handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted with data:", data);
    form.reset();
    // Here you would typically send the data to your backend API to create the folder
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="p-4 flex flex-col w-full max-w-2xl mx-auto shadow-lg border border-neutral-200 rounded-lg"
    >
      {/* <h3 className="mb-4 text-lg font-semibold">New Folder</h3> */}
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="font-semibold" htmlFor="name">
                Folder Name
              </FieldLabel>
              <input
                type="text"
                {...field}
                // onFocus={(e) => e.target.select()}
                className="border border-blue-700 text-lg focus:outline-blue-700 rounded p-2"
                placeholder="Folder name"
              />
              {fieldState.error && (
                <p className="text-red-500 text-base mt-1" role="alert">
                  {fieldState.error.message}
                </p>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex gap-5 mt-5">
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
