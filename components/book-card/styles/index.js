import styled from 'styled-components/macro';

export const Container = styled.div`
    border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` };
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 500px;
`;

export const Section = styled.div`
    flex: 1;
    height: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.div`
    flex: 1;
`;

export const FlightSection = styled.div`
    padding: 40px;
    height: 100%;
`;

export const PassengerSection = styled.div`
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const PointContainer = styled.div`
    width: fit-content;
    /* border: ${ ({ theme }) => `0.2px solid ${theme.secondary}` }; */
    /* padding: 10px; */
    justify-content: center;
    text-align: center;
    /* border-radius: 5px; */
`;

export const LocationContainer = styled.div`
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 5px;
    overflow: hidden;
    margin: auto;
`;

export const BrandContainer = styled.div`
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 5px;
    overflow: hidden;
`;

export const LocationName = styled.p`
    cursor: pointer;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.primary };
`;

export const Time = styled.p`
    margin: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.darkish };
`;

export const Label = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.darkish };
    margin-left: 5px;
`;

export const FlightNo = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
    margin-left: 5px;
`;

export const Cost = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
    margin-left: 5px;
`;

export const TravelClass = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
    margin-left: 5px;
`;

export const PassengerContainer = styled.div`
    padding: 10px;
    border-radius: 5px;
    border: ${({ theme }) => `0.2px solid ${theme.secondary}`};
    margin-bottom: 10px;
    background-color: ${ ({ theme, legend }) => legend ? theme.milk : theme.light };
`;

export const FirstName = styled.p`
    text-transform: capitalize;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
`;

export const LastName = styled.p`
    text-transform: capitalize;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
`;

export const Age = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish};
`;

export const Gender = styled.p`
    text-transform: capitalize;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.darkish };
`;

export const Meal = styled.p`
    text-transform: capitalize;
    margin: 0;
    font-size: 14px;
    color: ${({ theme, meal }) => meal === 'veg' ? theme.success : meal === 'non-veg' ? theme.danger : theme.darkish };
`;