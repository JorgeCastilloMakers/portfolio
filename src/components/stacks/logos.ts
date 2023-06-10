import { AiFillHtml5, } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoWordpress } from "react-icons/io";
import { SiTypescript, SiReact, SiStyledcomponents, SiFirebase, SiRedux, SiElementor, SiCanva, SiAdobeillustrator, SiAdobephotoshop, SiFigma } from "react-icons/si";
import { IconType } from "react-icons";



type Logo = {
    logo: IconType;
    name: string;
}

export const logos: Logo[] = [
    {
        logo: AiFillHtml5,
        name: 'HTML5'
    },
    {
        logo: IoLogoCss3,
        name: 'CSS3'
    },
    {
        logo: IoLogoJavascript,
        name: 'JavaScript'
    },
    {
        logo: SiTypescript,
        name: 'TypeScript'
    },
    {
        logo: SiReact,
        name: 'React'
    },
    {
        logo: IoLogoSass,
        name: 'Sass'
    },
    {
        logo: SiStyledcomponents,
        name: 'Styled Component'
    },
    {
        logo: SiFirebase,
        name: 'Firebase'
    },
    {
        logo: SiRedux,
        name: 'Redux'
    },
    {
        logo: BsGit,
        name: 'Git'
    },
    {
        logo: RxVercelLogo,
        name: 'Vercel'
    },
    {
        logo: TbBrandNextjs,
        name: 'Next-JS'
    },
    {
        logo: IoLogoWordpress,
        name: 'WordPress'
    },
    {
        logo: SiElementor,
        name: 'Elementor'
    },
    {
        logo: SiCanva,
        name: 'Canva'
    },
    {
        logo: SiAdobeillustrator,
        name: 'Adobe Illustrator'
    },
    {
        logo: SiAdobephotoshop,
        name: 'Adobe Photoshop'
    },
    {
        logo: SiFigma,
        name: 'Figma'
    },
];