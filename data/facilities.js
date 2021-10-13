import { IoFastFood, IoSwapHorizontal, IoBriefcase, IoNavigate } from 'react-icons/io5';
import { FaPassport, FaTshirt, FaDollarSign, FaLuggageCart, FaUserCheck } from 'react-icons/fa';

const iconSize = 55;
const iconColor = "#434343";

export const airportFacilities = [
    {
        id: 'af1',
        text: 'Foods and Resturants',
        icon: <IoFastFood color={iconColor} size={iconSize} />
    },
    {
        id: 'af2',
        text: 'Dress and Clothing',
        icon: <FaTshirt color={iconColor} size={iconSize} />
    },
    {
        id: 'af3',
        text: 'Banks and ATMs',
        icon: <FaDollarSign color={iconColor} size={iconSize} />
    },
    {
        id: 'af4',
        text: 'Foods and Resturants',
        icon: <IoSwapHorizontal color={iconColor} size={iconSize} />
    },
    {
        id: 'af5',
        text: 'Travel Helpline',
        icon: <IoBriefcase color={iconColor} size={iconSize} />
    }, 
];

export const boardingFacilities = [
    {
        id: 'bf1',
        text: 'Bags and Luggage',
        icon: <FaLuggageCart color={iconColor} size={iconSize} />
    },
    {
        id: 'bf2',
        text: 'Security Check',
        icon: <FaUserCheck color={iconColor} size={iconSize} />
    },
    {
        id: 'bf3',
        text: 'Entry and Terminals',            
        icon: <IoNavigate color={iconColor} size={iconSize} />
    },
    {
        id: 'af4',
        text: 'Boarding Pass and Passport',
        icon: <FaPassport color={iconColor} size={iconSize} />
    },
    {
        id: 'bf5',
        text: 'Boarding Helpline',
        icon: <IoBriefcase color={iconColor} size={iconSize} />
    }, 
];

