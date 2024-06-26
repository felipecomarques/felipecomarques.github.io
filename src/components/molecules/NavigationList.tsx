import NavigationButton from "../atoms/NavigationButton";
import LinksData from '../../assets/data/LinksData';

type Props = {
    isMenuOpen: boolean;
    clickLink: (link: string) => void;
}

function NavigationList({ isMenuOpen, clickLink }: Props) {
    return (
        <ul className={isMenuOpen ? "navigation-list active" : "navigation-list"}>
            {LinksData().map((link, id) => (
                <li key={id}>
                    <NavigationButton onClick={() => clickLink(link.href)} text={link.text} />
                    {/* <NavigationButton onClick={() => clickLink(link.href)} icon={link.icon} text={link.text} /> */}
                </li>
            ))}
        </ul>
    );
}

export default NavigationList;