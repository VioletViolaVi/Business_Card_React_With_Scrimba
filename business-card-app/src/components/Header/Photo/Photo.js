import Image from "./profile-pic.png";

const Photo = () => {
  return (
    <div>
      <figure>
        <img src={Image} alt="Cartoon profile." />
      </figure>
    </div>
  );
};

export default Photo;
