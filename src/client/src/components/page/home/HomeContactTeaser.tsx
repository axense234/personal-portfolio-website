// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import { homePageContactTeaserSectionData } from "@/data";
// SCSS
import homeContactTeaserStyles from "@/scss/components/page/home/HomeContactTeaser.module.scss";

const HomeContactTeaser = () => {
  const { buttons, paragraphs, title } = homePageContactTeaserSectionData;
  return (
    <section className={homeContactTeaserStyles.container}>
      <div className={homeContactTeaserStyles.content}>
        <h2>{title}</h2>
        <div className={homeContactTeaserStyles.paragraphs}>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
      <div className={homeContactTeaserStyles.buttons}>
        {buttons.map((button) => {
          return <LinkButton {...button} key={button.id} />;
        })}
      </div>
    </section>
  );
};

export default HomeContactTeaser;
