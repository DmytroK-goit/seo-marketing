import s from "./Licence.module.scss";

export default function LicensePage() {
  return (
    <div className={s.license}>
      <div className={s.container}>
        <h1>License Information</h1>

        <p>
          Thank you for using our template. This license grants you permission
          to use the product under the following terms and conditions.
        </p>

        <section>
          <h2>Usage Rights</h2>
          <ul>
            <li>
              You may use this template for personal or commercial projects.
            </li>
            <li>You may modify the design and code to fit your needs.</li>
            <li>You may use it for client projects.</li>
          </ul>
        </section>

        <section>
          <h2>Restrictions</h2>
          <ul>
            <li>You may not resell or redistribute this template.</li>
            <li>You may not claim this template as your own work.</li>
            <li>You may not publish this template on template marketplaces.</li>
          </ul>
        </section>

        <section>
          <h2>Copyright</h2>
          <p>
            All design and code are the property of BrandExponent. Unauthorized
            distribution is prohibited.
          </p>
        </section>

        <section>
          <h2>Support</h2>
          <p>
            If you have questions regarding this license, please contact us at:
          </p>
          <p className={s.email}>support@brandexponent.com</p>
        </section>
      </div>
    </div>
  );
}
