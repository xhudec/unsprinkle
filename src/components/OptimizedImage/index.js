import styled from "styled-components";

const SUPPORTED_DPIS = [1, 2, 3];
const AVIF_SRC_SUFFIX_MAP = {
  1: ".avif",
  2: "@2x.avif",
  3: "@3x.avif",
};
const JPG_SRC_SUFFIX_MAP = {
  1: ".jpg",
  2: "@2x.jpg",
  3: "@3x.jpg",
};

const getAvifSrcSet = (src) =>
  SUPPORTED_DPIS.map(
    (dpi) => `${src.replace(".jpg", AVIF_SRC_SUFFIX_MAP[dpi])} ${dpi}x`
  ).join(", ");
const getJpgSrcSet = (src) =>
  SUPPORTED_DPIS.map(
    (dpi) => `${src.replace(".jpg", JPG_SRC_SUFFIX_MAP[dpi])} ${dpi}x`
  ).join(", ");

const OptimizedImage = ({ src, alt, ...restProps }) => {
  return (
    <picture {...restProps}>
      <source srcSet={getAvifSrcSet(src)} />
      <source srcSet={getJpgSrcSet(src)} />
      <Image alt={alt} src={src} />
    </picture>
  );
};

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;

  object-fit: cover;
  object-position: center center;
`;

export default OptimizedImage;
