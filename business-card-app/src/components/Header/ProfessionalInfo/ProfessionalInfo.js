import Name from "./Name";
import JobTitle from "./JobTitle";
import ContactDetails from "./ContactDetails";

const ProfessionalInfo = () => {
  return (
    <section>
      <ul>
        <Name />
        <JobTitle />
      </ul>
      <ContactDetails />
    </section>
  );
};

export default ProfessionalInfo;
