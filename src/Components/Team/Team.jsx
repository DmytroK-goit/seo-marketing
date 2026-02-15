import Image from "next/image";
import s from "./Team.module.css";
import Kent from "../../img/team/kent.png";
import Wayne from "../../img/team/wayne.png";
import Brown from "../../img/team/brown.png";
import Prince from "../../img/team/prince.png";
import Jones from "../../img/team/jones.png";
import Evans from "../../img/team/evans.png";
import FrameUnd from "../../img/frame_und.png";
import FrameUp from "../../img/frame_up.png";
export const Team = () => {
  const team = [
    {
      image: Kent,
      name: "Jonathan Kent",
      role: "SEO Manager",
    },
    {
      image: Wayne,
      name: "Bruce Wayne",
      role: "Campaign Planner",
    },
    {
      image: Brown,
      name: "James Brown",
      role: "Social Media Executive",
    },
    {
      image: Prince,
      name: "Diana Prince",
      role: "Marketing Expert",
    },
    {
      image: Jones,
      name: "Anthony Jones",
      role: "SEO Executive",
    },
    {
      image: Evans,
      name: "Adam Evans",
      role: "Graphic Designer",
    },
  ];
  return (
    <div id="team">
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
      <div className={s.team_sec}>
        <h2>Marketing Team</h2>
        <p className={s.team_sec_p}>The most wonderful people our company</p>
        <ul className={s.team_list}>
          {team.map((t, index) => (
            <li key={index}>
              <Image src={t.image} alt={t.name} width={86} height={86} />
              <div className={s.team_list_info}>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <Image src={FrameUp} alt="SEO marketing illustration" priority /> */}
    </div>
  );
};
