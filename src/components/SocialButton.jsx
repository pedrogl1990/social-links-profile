const SocialButton = ({ platform, url }) => {
  return (
    <a href={url} target="_blank" className="w-full mb-4 text-sm font-bold last-of-type:mb-0">
      <button
        className="bg-grey-700 text-white w-full h-12 rounded-lg cursor-pointer hover:bg-futuristic-green hover:text-grey-700"
        type="button"
      >
        {platform}
      </button>
    </a>
  );
};

export default SocialButton;
