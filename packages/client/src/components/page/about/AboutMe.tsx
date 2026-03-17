// Next
import Image from "next/image";
// SCSS
import aboutMeStyles from "@/scss/components/page/about/AboutMe.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import { aboutPageAboutMeSectionData } from "@/data";

const AboutMe = () => {
  const { paragraphs, title, buttons } = aboutPageAboutMeSectionData;

  return (
    <section className={aboutMeStyles.container}>
      <Image
        alt="A Cool Looking Image I Guess Man"
        src={"/misc/placeholder.jpg"}
        width={400}
        height={400}
        title="Placeholder: Change this"
        aria-label="Placeholder: Change this"
      />
      <div className={aboutMeStyles.content}>
        <div className={aboutMeStyles.intro}>
          <h2>{title}</h2>
          <div className={aboutMeStyles.paragraphs}>
            {paragraphs?.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
        <div className={aboutMeStyles.buttons}>
          {buttons?.map((button) => {
            return <LinkButton {...button} key={button.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
