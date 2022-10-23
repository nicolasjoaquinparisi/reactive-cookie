import { useState } from 'react';

const useAnimations = () => {

    const [animations, setAnimations] = useState([]);
    const [id, setID] = useState(0);

    const createAnimation = (e, cookiesPerClick) => {

        // Objeto que contiene el id, y coordenadas x y de las animaciones de las galletitas y de los textos
        let newAnimation = {
            id: id,
            x: e.clientX - 10 + (Math.random() * 10 * 2.5),
            y: e.clientY + 10,
            value: cookiesPerClick
        }

        setID(id + 1);

        const newAnimations = animations;
        newAnimations.push(newAnimation);
        setAnimations([...newAnimations]);
    }

    return {
        animations,
        createAnimation
    };
}
 
export default useAnimations;