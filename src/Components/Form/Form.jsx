import Image from "next/image";
import s from "./Form.module.scss";
import FrameUndSec from "../../img/frame_und_sec.png";
import Location from "../../img/form/location.png";
import PhoneBook from "../../img/form/phonebook.png";
import Email from "../../img/form/email.png";
export const Form = () => {
  return (
    <div className={s.form_sec}>
      <Image src={FrameUndSec} alt="SEO marketing illustration" priority />
      <ul className={s.form_sec_list}>
        <li>
          <Image src={Location} alt="Location" width={48} height={52} />
          <h4>Address</h4>
          <p>
            Express Chambers II Spaces Works, Level 5, Royapettah, Chennai –
            600014
          </p>
        </li>
        <li>
          <Image src={PhoneBook} alt="PhoneBook" width={48} height={52} />
          <h4>Phone</h4>
          <div>
            {" "}
            <p>Enquiry: 1800-123-4567</p>
            <p>Order: 2400-480-894</p>
          </div>
        </li>
        <li>
          <Image src={Email} alt="Email" width={48} height={52} />
          <h4>Email</h4>
          <div>
            {" "}
            <p>help@brandexponent.com</p>
            <p>support@brandexponent.com</p>
          </div>
        </li>
      </ul>
      <p></p>
    </div>
  );
};
