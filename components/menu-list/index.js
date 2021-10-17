import { useSession } from 'next-auth/client';
import { Container } from './styles';
import MenuItem from '../menu-item';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import { useDispatch } from 'react-redux';

const MenuList = ({ list = [], size = 60, display, setDisplay, addGallery, removeAction }) => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const menuItemClickHandler = (menuItem) => {
        setDisplay(menuItem);
    }

    const addMenuItemHandler = () => {
        addGallery();
    }

    const removeMenuItemHandler = async (id) => {
        if (!loading && session) {
            try {
                await dispatch(removeAction(session.jwt, id));
            } catch (err) {
                message.error(errConfig(err, 'Error removing uploaded gallery from server!'));
            }
        }
    }

    return (
        <Container>
            {
                list.map(listItem => <MenuItem
                        key={listItem.id}
                        gallery={listItem}
                        size={size}
                        onPress={() => menuItemClickHandler(listItem)}
                        onRemove={() => removeMenuItemHandler(listItem.id)}
                        isActive={display && (display.id === listItem.id)}
                    />
                )
            }
            <MenuItem
                key={'add-plate'}
                addPlate
                size={size}
                onPress={addMenuItemHandler}
            />
        </Container>
    );
}

export default MenuList;