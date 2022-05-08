import { RH1, RH2, RH3, RH4 } from '../Components/Logos';
import React from 'react';
const Images = [
    {
        id: 7,
        img: <RH1 />,
        sty: "rhall"
    },
    {
        id: 8,
        img: <RH2 />,
        sty: ""
    },
    {
        id: 9,
        img: <RH3 />,
        sty: ""
    },
    {
        id: 10,
        img: <RH4 />,
        sty: ""
    }
]
export const getRHImages = () => {
    return Images;
}