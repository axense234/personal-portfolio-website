// Styles
import homeAboutTeaserStyles from "@/scss/components/page/home/HomeAboutTeaser.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import { homePageAboutTeaserSectionData } from "@/data";

const HomeAboutTeaser = () => {
  const { buttons, paragraphs, title } = homePageAboutTeaserSectionData;

  return (
    <section className={homeAboutTeaserStyles.container}>
      <div className={homeAboutTeaserStyles.content}>
        <h2>{title}</h2>
        <div className={homeAboutTeaserStyles.paragraphs}>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
      <div className={homeAboutTeaserStyles.buttons}>
        {buttons.map((button) => {
          return <LinkButton {...button} key={button.id} />;
        })}
      </div>
    </section>
  );
};

export default HomeAboutTeaser;
