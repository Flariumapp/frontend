import Img from 'next/image';

const Image = ({ src, alt, height, width }) => {
    return (
        <Img
            src={src}
            alt={alt}
            height={height}
            width={width}
        />
    );
}

export default Image;