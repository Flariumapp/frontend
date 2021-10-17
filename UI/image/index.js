import Img from 'next/image';

const Image = ({ src, alt, height, width, objectFit = 'cover' }) => {
    return (
        <Img
            loader={() => src}
            src={src}
            alt={alt}
            height={height}
            width={width}
            objectFit={objectFit}
        />
    );
}

export default Image;