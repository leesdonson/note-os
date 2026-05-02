"use client";
import Link from "next/link";

export function SignUpForm() {
  return (
    <div className="w-full shadow-lg border rounded-xl p-4">
      <h2 className="font-semibold text-2xl md:text-4xl mb-5">
        Create an Account
      </h2>
      <form className="flex flex-col w-full">
        <div className="mb-5">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            className="w-full rounded-md p-2 border border-neutral-300 mt-3 text-lg"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="w-full rounded-md p-2 border border-neutral-300 mt-3 text-lg"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            className="w-full rounded-md p-2 border border-neutral-300 mt-3 text-lg"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/auth/sign-in"
            className="text-lg text-blue-800 underline underline-offset-2 hover:text-neutral-700 transition-colors"
          >
            Already have an account? Sign In
          </Link>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-lg py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
