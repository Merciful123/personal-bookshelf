import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const MyBookshelf = ({ bookshelf }) => {
  return (
    <>
      <h1 className="text-center text-green-500 text-4xl mb-2 mt-4 font-sriracha">
        My Bookshelf
      </h1>
      <div className="flex justify-end lg:w-[90%] max-sm:w-[90%] mx-auto">
        <Link to="/" className="bg-green-400 text-white rounded-md px-2 py-2">
          Back to Booklist
        </Link>
      </div>
      {bookshelf.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          Your bookshelf is empty.
        </p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 border rounded-md lg:p-2 m-2">
          {bookshelf.map((book) => (
            <Card key={book.key} className="max-w-[400px] m-4">
              <CardHeader className="flex gap-3">
                <Image
                  alt={`${book.title} cover`}
                  height={40}
                  radius="sm"
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "https://via.placeholder.com/128x193?text=No+Cover"
                  }
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{book.title}</p>
                  <p className="text-small text-default-500">
                    {book.author_name?.join(", ")}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  <span className="font-bold">Edition Count:</span>{" "}
                  {book.edition_count}
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href={`https://openlibrary.org${book.key}`}
                >
                  View on Open Library
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default MyBookshelf;
