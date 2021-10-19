import Img from 'next/image';

const Image = ({ src, alt, height, width, objectFit = 'cover', ...props }) => {
    return (
        <Img
            loader={() => src}
            src={src}
            alt={alt}
            height={height}
            width={width}
            objectFit={objectFit}
            {...props}
        />
    );
}

export default Image;