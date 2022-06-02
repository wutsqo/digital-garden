import React from "react"

export const JournalComponent = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-16">
      <h1 className="text-5xl lg:text-7xl">The Digital Garden 🌱</h1>

      <div className="mt-2 prose dark:prose-invert text-black dark:text-white">
        <h2 className="mt-8">What is this?</h2>
        <p>Quoting from Joel Hooks:</p>
        <blockquote>
          The phrase "digital garden" is a metaphor for thinking about writing
          and creating that focuses less on the resulting "showpiece" and more
          on the process, care, and craft it takes to get there.
        </blockquote>
        <p>
          For a detailed explanation, read his full article{" "}
          <a href="https://joelhooks.com/digital-garden">here</a>.
        </p>
      </div>
      <div className="mt-32 max-w-sm">
        ⚠ This page is currently under construction. 
      </div>
    </div>
  )
}
