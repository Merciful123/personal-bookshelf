// src/components/BookCard.js
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@nextui-org/react";
import "./index.css";

const BookCard = ({ book, addToBookshelf }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/128x193?text=No+Cover";

  return (
    <Card className="max-w-[400px] m-4">
      <CardHeader className="flex gap-3">
        <Image
          alt={`${book.title} cover`}
          height={60}
          radius="sm"
          src={coverUrl}
                  width={60}
                  className="object-cover h-full"
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
          <span className="font-bold">Edition Count:</span> {book.edition_count}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-start">
        <Button color="success" size="sm" onClick={() => addToBookshelf(book)}>Add to Bookshelf</Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
