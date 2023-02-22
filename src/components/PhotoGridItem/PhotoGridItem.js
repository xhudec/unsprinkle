import React from "react";
import styled from "styled-components/macro";
import OptimizedImage from "../OptimizedImage";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <OptimizedImage alt={alt} src={src} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  width: min-content;
  white-space: nowrap;

  &:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
