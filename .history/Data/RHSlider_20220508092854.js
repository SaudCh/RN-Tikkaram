import { RH1, RH2, RH3 } from '../Components/Logos';

const Images = [
    {
        id: 7,
        img: <RH1 />,
        sty: "rhall"
    },
    {
        id: 8,
        img: <RH2 />,
    },
    {
        id: 9,
        img: <RH3 />,
    },

]
export const getImages = () => {
    return Images;
}