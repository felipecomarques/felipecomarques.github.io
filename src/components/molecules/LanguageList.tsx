import LanguageButton from "../atoms/LanguageButton";

type Props = {
    isLanguageOpen: boolean;
    clickLanguage: (name: string) => void;
}

function LanguageList({ isLanguageOpen, clickLanguage }: Props) {
    return (
        <ul className={isLanguageOpen ? "flex flex-col language-list active" : "hidden"}>
            <li> <LanguageButton onClick={() => clickLanguage("en")} text="English" /></li>
            <li> <LanguageButton onClick={() => clickLanguage("pt")} text="Português" /></li>
        </ul>
    )
}
export default LanguageList