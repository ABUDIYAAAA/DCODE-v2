import NavBar from '../NavBar/NavBar';
import ContactPage from '../../ContactPage/ContactPage';

const ContactLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1">
        <ContactPage />
      </div>
    </div>
  );
};

export default ContactLayout;
