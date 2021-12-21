import Image from "./profile-pic.png";

const Photo = () => {
  return (
    <section>
      <figure className="profile-pic">
        <img src={Image} alt="Cartoon profile." />
      </figure>
    </section>
  );
};

export default Photo;
