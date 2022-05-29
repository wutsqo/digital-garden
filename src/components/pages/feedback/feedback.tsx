import React, { useState } from "react"
import axios from "axios"
import { Button } from "../../button"

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
    <div className="mt-16 max-w-screen-md mx-auto">
      <h1>Send me a message</h1>
      <div className="mt-8 flex flex-col gap-8 text-black dark:text-white">
        <div>
          <label className="dark:text-white text-black">Name</label> <br />
          <input
            type="text"
            className="w-full h-10 mt-2  bg-slate-200 dark:bg-slate-800 px-3 py-2 bg-opacity-75 dark:bg-opacity-75"
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
            className="w-full mt-2  bg-slate-200 dark:bg-slate-800 px-3 py-2 bg-opacity-75 dark:bg-opacity-75"
            value={input.pesan}
            name="pesan"
            onChange={inputHandler}
            placeholder="What do you want to tell me?"
          />
          {!input.pesan ? (
            <div className="text-red-500 text-xs">This field is required</div>
          ) : (
            <div className="text-gray-500 text-xs">
              You can also leave a contact info if you want a reply
            </div>
          )}
        </div>
        <div>
          <Button disabled={!input.pesan || loading} onClick={submit}>
            {loading ? "Loading..." : "Send Message"}
          </Button>
        </div>
      </div>
    </div>
  )
}
