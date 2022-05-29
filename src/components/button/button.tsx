import { Link } from "gatsby"
import React from "react"

type ButtonProps = {
  size?: "sm" | "md" | "lg"
  to?: string
  secondary?: boolean
  disabled?: boolean
  onClick?: () => void
}

const styles = {
  sm: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    padding: "0.25rem 0.5rem",
  },
  md: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    padding: "0.5rem 1rem",
  },
  lg: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    padding: "0.75rem 1.5rem",
  },
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  size = "md",
  secondary,
  disabled,
  onClick,
}) => {
  if (to?.startsWith("http"))
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          secondary
            ? "bg-white dark:bg-black"
            : "bg-primary dark:bg-primary-dark"
        } ${size === "sm" ? "card-sm" : "card"} text-center`}
        style={styles[size]}
      >
        {children}
      </a>
    )

  if (to) {
    return (
      <Link
        to={to}
        className={`${
          secondary
            ? "bg-white dark:bg-black"
            : "bg-primary dark:bg-primary-dark"
        } ${size === "sm" ? "card-sm" : "card"} text-center`}
        style={styles[size]}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        secondary ? "bg-white dark:bg-black" : "bg-primary dark:bg-primary-dark"
      } ${size === "sm" ? "card-sm" : "card"} ${
        disabled
          ? `cursor-not-allowed opacity-50 hover:translate-x-0 hover:translate-y-0 ${
              size === "sm"
                ? "hover:shadow-offset-black-sm dark:hover:shadow-offset-white-sm"
                : "hover:shadow-offset-black dark:hover:shadow-offset-white"
            }`
          : ""
      }`}
      style={styles[size]}
    >
      {children}
    </button>
  )
}
