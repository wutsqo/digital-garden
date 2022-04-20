import React, { useState } from "react"
import axios from "axios"

export const FeedbackComponent = () => {
  const [input, setInput] = useState({
    nama: "",
    pesan: "",
  })
  const [loading, setLoading] = useState(false)

  const inputHandler = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submit = () => {
    setLoading(true)
    axios
      .post("/api/feedback", input)
      .then((resp) => {
        setInput({ nama: "", pesan: "" })
        alert("Your message has been received. Thanks! 😁")
      })
      .catch((err) => {
        console.log(err)
        alert("An error occured")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="mt-8 max-w-screen-md mx-auto">
      <h1>Send me a message</h1>
      <div className="mt-8 flex flex-col gap-8 text-black dark:text-white">
        <div>
          <label className="dark:text-white text-black">Name</label> <br />
          <input
            type="text"
            className="w-full h-10 mt-2 rounded bg-slate-200 dark:bg-slate-800 px-3 py-2 bg-opacity-75 dark:bg-opacity-75"
            value={input.nama}
            name="nama"
            onChange={inputHandler}
            placeholder="Enter your name"
          />
          <div className="text-gray-500 text-xs mt-1">
            Leave this blank if you want to send anonymous message
          </div>
        </div>
        <div>
          <label className="dark:text-white text-black">Message</label> <br />
          <textarea
            rows={5}
            className="w-full mt-2 rounded bg-slate-200 dark:bg-slate-800 px-3 py-2 bg-opacity-75 dark:bg-opacity-75"
            value={input.pesan}
            name="pesan"
            onChange={inputHandler}
            placeholder="What message do you want to tell me?"
          />
          {!input.pesan && (
            <div className="text-red-500 text-xs">This field is required</div>
          )}
        </div>
        <div>
          <button
            className={`py-2 px-4 rounded border ${
              !input.pesan
                ? "bg-transparent opacity-70 border-black dark:border-white"
                : "bg-blue-400"
            }`}
            disabled={!input.pesan}
            onClick={submit}
          >
            {loading ? "Loading..." : "Send Message"}
          </button>
        </div>
      </div>
      <div className="mt-16">
        <h3>FAQ</h3>
        <div className="mt-4 text-slate-800 dark:text-slate-200">
          <div>
            <div className="font-medium text-lg">
              Are you reading my message?
            </div>
            <div className="font-light">
              Yes! The message will be sent straight into my private Discord
              server via{" "}
              <a
                href="https://discord.com/developers/docs/resources/webhook"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                webhook
              </a>
              . So I will read them within hours, even minutes.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
