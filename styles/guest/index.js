import styled from 'styled-components/macro';
import Image from 'next/image';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -60%);
    padding: 40px;
`;

export const AppLegendContainer = styled.div``;

export const AppLegendMedium = styled.p`
    font-size: 50px;
    font-weight: 400;
    color: ${ ({ theme }) => theme.light };
    margin: 0;
    line-height: 70px;
`;

export const AppLegendLarge = styled.p`
    font-size: 120px;
    font-weight: 500;
    color: ${ ({ theme }) => theme.light };
    margin: 0;
    line-height: 120px;
`;

export const Section = styled.div`
    margin-top: 50px;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
`;

export const FeatureSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PartnerSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PartnerContainer = styled.div`

`;

export const PartnerLogo = styled(Image)`

`;