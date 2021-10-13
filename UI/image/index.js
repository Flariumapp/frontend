import Img from 'next/image';

const Image = ({ src, alt, height, weight }) => {
    return (
        <Img
            src={src}
            alt={alt}
            height={height}
            weight={weight}
        />
    );
}

export default Image;