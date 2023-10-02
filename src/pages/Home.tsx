import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

type SharedProps = {
    pic: string;
    title: string;
    currentLink: string;
    links: {
        link: string;
        title: string;
    }[];
}

export const Sub: React.FC<SharedProps> = (props) => {
    function getLinkElements() {
        const links: JSX.Element[] = [];

        for (const info of props.links) {
            const isCurrent = info.link === props.currentLink;

            const element = (
                <Link key={info.link} to={`${info.link}`} style={{ display: 'inline-block', width: '100px' }}
                    className={isCurrent ? "disabled-link" : ""}>{info.title}</Link>
            );
            links.push(element);
        }

        return links;
    }

    return (
        <>
            <main>
                <h2>{props.title}</h2>
                <img src={props.pic} alt="" />
            </main>
            <nav>
                {
                    getLinkElements()
                }
            </nav>
        </>
    );
};
