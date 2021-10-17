import { Container, AddPlate, Display, Photo, Dot } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';
import theme from '../../styles/theme';
import { galleryUrl } from '../../utility/media-url';

const MenuItem = ({ gallery, isActive, size, addPlate, onPress, onRemove }) => {
    if (addPlate) {
        return (
            <Container onClick={onPress}>
                <Display>
                    <AddPlate size={size}>
                        <FiPlus
                            size={20}
                            color={theme.darkish}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </AddPlate>
                </Display>
            </Container>
        );
    }

    return (
        <Container onClick={onPress}>
            <Display isActive={isActive}>
                <Photo
                    loader={() => galleryUrl(gallery)}
                    objectFit="cover"
                    src={galleryUrl(gallery)}
                    alt={gallery.caption}
                    height={size}
                    width={size}
                />
                <FiX
                    onClick={onRemove}
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: 5,
                        right: 5,
                        color: "#fff"
                    }}
                />
            </Display>
            { isActive && <Dot /> }
        </Container>
    );
}

export default MenuItem;