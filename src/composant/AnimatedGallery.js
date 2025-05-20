import { Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';


const MotionImage = motion(Image);

const AnimatedGallery = (props) => {
    return (
        <Row className="pt-5 ms-auto justify-content-start">
            {props.imageList.map((src, index) => (
                <Col key={index} lg={3} className="mb-4">
                    <MotionImage
                        src={src}
                        alt={`image-${index}`}
                        className="fixed-img"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default AnimatedGallery;
