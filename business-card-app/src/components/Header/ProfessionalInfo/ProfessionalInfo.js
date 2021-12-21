import Name from "./Name";
import JobTitle from "./JobTitle";
import WebLink from "./WebLink";
import Email from "./Email";
import LinkedIn from "./LinkedIn";

const ProfessionalInfo = () => {
  return (
    <section>
      <ul>
        <Name />
        <JobTitle />
        <WebLink />
        <Email />
        <LinkedIn />
      </ul>
    </section>
  );
};

export default ProfessionalInfo;
