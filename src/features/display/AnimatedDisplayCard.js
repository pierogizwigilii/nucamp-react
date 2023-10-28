import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0, //fade in effect - opacity property, if toggle is set to true set opacity to 1 if false to 0
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)', //change height from 0 to 100% - if toggle is true scale 100% width and height, if false 100% width 0% height
        config: { duration: 500 } //animation to span duration of half a second
    });

    useEffect(() => {
        setToggle(true);
    }, []); //only run side effect using useEffect hook once as used empty array as second argument

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;