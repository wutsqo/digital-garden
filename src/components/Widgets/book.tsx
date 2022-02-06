import React, { FC } from "react"
import StarRatings from "react-star-ratings"

interface Book {
  book: {
    title: string
    image: string
    author: any
  }
  rating: string
  read_at: string
  url: string
}

const BookWidget: FC<Book> = (props) => {
  const { book, rating, read_at, url } = props

  if (!props.url)
    return (
      <div className="flex h-24 animate-pulse">
        <div className="h-24 w-20 bg-dark-cream dark:bg-emerald-900"></div>
        <div className="px-4 p-1.5 z-0 relative w-full">
          <div className="bg-dark-cream dark:bg-emerald-900 h-6 w-48 mt-1"></div>
          <div className="bg-dark-cream dark:bg-emerald-900 h-4 w-32 mt-2"></div>
          <div className="bg-dark-cream dark:bg-emerald-900 h-4 w-20 absolute bottom-2"></div>
        </div>
      </div>
    )

  return (
    <a
      className="flex hover:bg-dark-cream dark:hover:bg-emerald-900 hover:shadow h-24"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="object-cover h-24 w-16"
        />
      </div>
      <div className="px-4 p-1.5 z-0 relative w-full" style={{ zIndex: 0 }}>
        <div className="text-sm font-medium align-middle">{book.title}</div>
        <div className="text-xs mt-1 text-gray-700 dark:text-gray-300">
          {" "}
          by {book.author}
        </div>
        <div className="absolute bottom-1.5 text-xs flex w-full">
          <StarRatings
            rating={parseInt(rating)}
            starRatedColor="#EFA51D"
            starEmptyColor="#D3D3D3"
            starDimension="15px"
            starSpacing="0px"
          />
          <div className="mt-0.5 font-light">&nbsp; {read_at}</div>
        </div>
      </div>
    </a>
  )
}

export default BookWidget
