import { useTranslation } from 'react-i18next';
import SectionTitle from "../atoms/SectionTitle";
import SkillCard from './SkillCard';

function ProfileDescription() {
    const { t } = useTranslation();
    return (
        <article className='flex flex-col'>
            <SectionTitle text={t('titles.about')} />
            <p className="text-violet-100 mt-4 atkinson-hyperlegible-regular text-justify">
                {t('about.text')}
            </p>
            <div className='flex w-auto justify-center'>
                <SkillCard />
            </div>
        </article>
    );
}

export default ProfileDescription;