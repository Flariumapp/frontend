import { Container, Display, Info } from './styles';
import { Image } from '../../UI';
import { passengerList } from '../../utility/passenger-list';
import { FiPlus, FiX } from 'react-icons/fi';
import theme from '../../styles/theme';

const PassengerCard = ({ passenger, addPlate = false, onPress, removePassenger }) => {

    if (addPlate) {
        return (
            <Container onClick={onPress}>
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
            </Container>
        );
    }

    const { firstName, lastName, imageIndex } = passenger;

    const size = 50;

    const onRemove = async () => {
        await removePassenger(passenger.id);
    }


    return (
        <Container>
            <Display size={size}>
                <Image
                    src={passengerList[imageIndex].image}
                    alt={firstName}
                    width={size}
                    height={size}
                />
            </Display>
            <div style={{ height: 10 }} />
            <Info>{firstName + ' ' + lastName}</Info>
            <FiX
                onClick={onRemove}
                style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: 5,
                    right: 5,
                    color: theme.darkish
                }}
            />
        </Container>
    );
}

export default PassengerCard;