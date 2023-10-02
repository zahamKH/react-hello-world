import React from "react";
import { Link } from "react-router-dom";

type SharedProps = {
    pic: string;
    link?: string;
    title?: string;
}

/*export const Sub: React.FC<SharedProps> = (props) => {
    function getLinkElement() {
        return (
            <Link to={`${props.link}`} style={{ display: 'inline-block', width: '100px' }}>{props.title}</Link>
        );
    }

    return (
        <>
            <main>
                <h2>Home</h2>
                <img src={props.pic} alt="" />
            </main>
            <nav>
                {
                    getLinkElement()
                }
            </nav>
        </>
    );
};*/

export const Home: React.FC<SharedProps> = (props) => {
    return (
        <>
            <main>
                <h2>Home</h2>
                <img src={props.pic} alt="" />
            </main>
            <nav>
                <Link to="/subA" style={{ display: 'inline-block', width: '100px' }}>SubA</Link>
            </nav>
        </>
    );
};

export const SubA: React.FC<SharedProps> = (props) => {
    return (
        <>
            <main>
                <h2>SubA</h2>
                <img src={props.pic} alt="" />
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/subB" style={{ display: 'inline-block', width: '100px' }}>SubB</Link>
            </nav>
        </>
    );
};

export const SubB: React.FC<SharedProps> = (props) => {
    return (
        <>
            <main>
                <h2>SubB</h2>
                <img src={props.pic} alt="" />
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/subA" style={{ display: 'inline-block', width: '100px' }}>SubA</Link>
            </nav>
        </>
    );
};
