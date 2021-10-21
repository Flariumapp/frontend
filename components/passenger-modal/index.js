import { useState, useEffect } from "react";
import { useSession } from 'next-auth/client';
import { errConfig } from '../../utility/error-config';
import {
    Container, Display, Footer, Form, Photo, Section, Wrapper, InputContainer, InputSection
} from './styles';
import { Modal, Input, Select } from '../../UI';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { mealType } from "../../utility/meal-type";
import { genderType } from '../../utility/gender-type';
import { passengerList } from '../../utility/passenger-list';
import { addPassenger } from '../../store/actions';

const PassengerModal = ({ showModal, setShowModal, imageIndex, flight }) => {
    const dispatch = useDispatch();
    const [session, loading] = useSession();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [meal, setMeal] = useState();

    const modalUrl = passengerList[imageIndex].image;

    const [isLoading, setIsLoading] = useState(false);

    const verticalGap = 10;
    const horizontalGap = 10;

    const handleSave = async () => {
        if (firstName && email && age && meal) {
            if (!loading && session) {
                setIsLoading(true);
                try {
                    await dispatch(addPassenger(session.jwt, {
                        firstName, lastName, email, age, gender, meal, imageIndex, flight: flight.id,
                    }));
                    handleCancel();
                    setIsLoading(false);
                } catch (err) {
                    console.log(err);
                    setIsLoading(false);
                    message.error(errConfig(err, 'Error adding passenger data!'));
                }
            }
        }
    }

    const handleCancel = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender(null);
        setAge(null);
        setMeal(null);
        setShowModal(false);
    }

    return (
        <Modal
            title="Add Passenger"
            visible={showModal}
            okText={'Save'}
            cancelText={'Cancel'}
            onOk={handleSave}
            onCancel={handleCancel}
        >
            <Container>
                <Wrapper>
                    <Section>
                        <Display>
                            {
                                modalUrl && modalUrl.trim().length > 0 &&
                                <Photo src={modalUrl} alt={'modal image'} />
                            }
                        </Display>
                    </Section>
                    <Section>
                        <Form>
                            <InputSection>
                                <InputContainer>
                                    <Input
                                        value={firstName}
                                        setValue={setFirstName}
                                        placeholder={'First Name'}
                                        size={'large'}
                                    />
                                </InputContainer>
                                <div style={{ width: horizontalGap }} />
                                <InputContainer>
                                    <Input
                                        value={lastName}
                                        setValue={setLastName}
                                        placeholder={'Last Name'}
                                        size={'large'}
                                    />
                                </InputContainer>
                            </InputSection>
                            <div style={{ height: verticalGap }} />
                            <Input
                                value={email}
                                setValue={setEmail}
                                placeholder={'Email'}
                                size={'large'}
                            />
                            <div style={{ height: verticalGap }} />
                            <Select 
                                value={gender}
                                setValue={setGender}
                                placeholder={'Gender'}
                                list={genderType}
                                size={'large'}
                            />
                            <div style={{ height: verticalGap }} />
                            <Input
                                value={age}
                                setValue={setAge}
                                placeholder={'Age'}
                                size={'large'}
                                type={'number'}
                            />
                             <div style={{ height: verticalGap }} />
                            <Select 
                                value={meal}
                                setValue={setMeal}
                                placeholder={'Meal'}
                                list={mealType}
                                size={'large'}
                            />
                        </Form>
                    </Section>
                </Wrapper>
            </Container>
        </Modal>
    );
}

export default PassengerModal;