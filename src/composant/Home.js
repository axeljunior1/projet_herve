import React, {useEffect, useState} from "react";
import {Aceuil1} from "./Aceuil1";
import {Aceuil2} from "./Aceuil2";
import {Aceuil3} from "./Aceuil3";


const elements = [
    <div key="1"><Aceuil1/></div>,
    <div key="2"><Aceuil2/></div>,
    <div key="3"><Aceuil3/></div>
];




const Home = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % elements.length);
        }, 60000); // 60000 ms = 1 minute

        return () => clearInterval(interval); // nettoyage
    }, []);

    return (
        <div className="">


            <div>
                {elements[index]}

            </div>
        </div>
    );
};

export default Home;
