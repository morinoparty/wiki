"use client";

import { Editable } from "@chakra-ui/react";
import { Tag } from "lucide-react";
import { postHeaderStyles } from "./PostHeader";
import { css, cx } from "styled-system/css";

interface PostHeaderEditProps {
  image?: string;
  category: string;
  title: string;
  description: string;
  onChange?: (fields: {
    title: string;
    description: string;
    category: string;
  }) => void;
  disabled?: boolean;
}

export function PostHeaderEdit({
  image,
  category,
  title,
  description,
  onChange,
  disabled,
}: PostHeaderEditProps) {
  const classes = postHeaderStyles();

  // Chakra Editable v2: onValueChange/Commit receives { value: string }
  const handleCategoryChange = (details: { value: string }) => {
    onChange?.({ title, description, category: details.value });
  };
  const handleTitleChange = (details: { value: string }) => {
    onChange?.({ title: details.value, description, category });
  };
  const handleDescriptionChange = (details: { value: string }) => {
    onChange?.({ title, description: details.value, category });
  };

  return (
    <header className={classes.container}>
      {image && (
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className={classes.info}>
        <p className={classes.category}>
          <Tag width={16} />
          <Editable.Root
            value={category}
            onValueChange={handleCategoryChange}
            disabled={disabled}
            selectOnFocus
            placeholder="カテゴリ"
            size="md"
          >
            <Editable.Preview />
            <Editable.Input />
          </Editable.Root>
        </p>
        <Editable.Root
          value={title}
          onValueChange={handleTitleChange}
          disabled={disabled}
          selectOnFocus
          placeholder="タイトル"
          size="lg"
        >
          <h1
            className={cx(
              classes.title,
              css({
                fieldSizing: "content",
              })
            )}
          >
            <Editable.Preview />
            <Editable.Textarea
              className={css({
                fieldSizing: "content",
              })}
            />
          </h1>
        </Editable.Root>
        <Editable.Root
          value={description}
          onValueChange={handleDescriptionChange}
          disabled={disabled}
          selectOnFocus
          placeholder="説明"
          size="md"
        >
          <p
            className={cx(
              classes.description,
              css({
                fieldSizing: "content",
              })
            )}
          >
            <Editable.Preview />
            <Editable.Textarea
              className={css({
                fieldSizing: "content",
              })}
            />
          </p>
        </Editable.Root>
      </div>
    </header>
  );
}
