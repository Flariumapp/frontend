import { Container, Display, Title } from './styles';
import { Image } from '../../UI';
import { galleryUrl } from '../../utility/media-url';

const GridItem = ({ id, title, gallery, size = 70, showTitle = true }) => {
    return (
        <Container>
            <Display size={size}>
                <Image
                    src={galleryUrl(gallery)}
                    alt={title || gallery.caption}
                    height={size}
                    width={size}
                />
            </Display>
            {
                showTitle &&
                <Title>
                    {title}
                </Title>
            }
        </Container>
    );
}

export default GridItem;