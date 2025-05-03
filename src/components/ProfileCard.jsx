import { profile } from "../constants/profile";
import { socialLinks } from "../constants/social-links";
import SocialButton from "./SocialButton";

const ProfileCard = () => {
  return (
    <article className="bg-grey-800 rounded-2xl p-6 max-w-[450px]">
      <section className="list-col-center ">
        <img src={profile.image} alt={profile.name} className="rounded-full h-20 w-20 mb-5" />
        <h1 className="text-white text-center text-xl font-semibold mb-2">{profile.name}</h1>
        <p className="text-futuristic-green text-center text-sm font-semibold mb-5">{profile.location}</p>
        <p className="text-white text-center text-sm mb-5">"{profile.bio}"</p>
      </section>
      <section className="list-col-center">
        {socialLinks.map((social) => (
          <SocialButton platform={social.platform} url={social.url} />
        ))}
      </section>
    </article>
  );
};

export default ProfileCard;
