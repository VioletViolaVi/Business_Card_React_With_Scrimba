import Name from "./Name";
import JobTitle from "./JobTitle";
import ContactDetails from "./ContactDetails";

const ProfessionalInfo = () => {
  return (
    <div>
      <ul>
        <Name />
        <JobTitle />
      </ul>
      <ContactDetails />
    </div>
  );
};

export default ProfessionalInfo;
