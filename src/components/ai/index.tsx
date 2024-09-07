import { promptToStyle } from "./prompt-to-style";

interface ContainerElementProps {
    children?: React.ReactNode;
    prompt: string;
}

interface VoidElementProps {
    prompt: string;
}

async function h1({ prompt='', children }: ContainerElementProps) {
  return <h1
    style={await promptToStyle({ prompt, element: "h1" })}
  >
    {children}
  </h1>;
}

async function h2({ prompt='', children }: ContainerElementProps) {
    return <h2
        style={await promptToStyle({ prompt, element: "h2" })}
    >
        {children}
    </h2>;
}

async function button({ prompt='', children }: ContainerElementProps) {
    return <button
        style={await promptToStyle({ prompt, element: "button" })}
    >
        {children}
    </button>;
}

async function div({ prompt='', children }: ContainerElementProps) {
    return <div
        style={await promptToStyle({ prompt, element: "div" })}
    >
        {children}
    </div>;
}

async function p({ prompt='', children }: ContainerElementProps) {
    return <p
        style={await promptToStyle({ prompt, element: "p" })}
    >
        {children}
    </p>;
}

async function img({ prompt='', src, alt }: VoidElementProps & { src: string, alt: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} 
        style={await promptToStyle({ prompt, element: "img" })}
    />;
}



export {
    h1,
    h2,
    button,
    div,
    p,
    img
}