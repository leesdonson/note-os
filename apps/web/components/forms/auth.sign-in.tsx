"use client";

import Link from "next/link";

export function SignInForm() {
  return (
    <div className="w-full shadow-lg border rounded-xl p-4">
      <h2 className="font-semibold text-2xl md:text-4xl mb-5">Welcome Back!</h2>
      <form className="flex flex-col w-full">
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
            href="/auth/sign-up"
            className="text-lg text-blue-800 underline underline-offset-2 hover:text-neutral-700 transition-colors"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-lg py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
