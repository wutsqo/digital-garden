import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import useSound from "use-sound"
import onSfx from "../../../assets/sounds/switch-on.mp3"
import offSfx from "../../../assets/sounds/switch-off.mp3"
import sun from "../../../assets/images/sun.svg"
import moon from "../../../assets/images/moon.svg"

const ThemeToggle = () => {
  const [on] = useSound(onSfx)
  const [off] = useSound(offSfx)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <button
          className="text-2xl h-9 w-9 flex items-center justify-center"
          onClick={() => {
            theme === "dark" ? on() : off()
            toggleTheme(theme === "light" ? "dark" : "light")
          }}
        >
          <div
            className={`absolute ${
              theme === "light"
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 rotate-45"
            } duration-500 ease-in-out`}
          >
            <img src={sun} alt="sun" className="h-8 p-1" />
          </div>

          <div
            className={`absolute ${
              theme === "dark"
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 rotate-45"
            } duration-500 ease-in-out`}
          >
            <img src={moon} alt="moon" className="h-8 p-1" />
          </div>
        </button>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
