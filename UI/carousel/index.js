import { Carousel as Crsl } from 'antd';
import { Display } from './styles';
import { Photo } from './styles';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel = ({ list = [] }) => {
    return (
        <Crsl autoplay>
            {
                list.map(item => <Display key={item.id}>
                    <Photo
                        loader={ () => item.image }
                        src={item.image}
                        alt={item.title}
                        height={500}
                        width={1400}
                        objectFit='cover'
                    />
                </Display>)
            }
        </Crsl>
    );
}

export default Carousel;