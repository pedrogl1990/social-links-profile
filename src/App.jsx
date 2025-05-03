import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen h-full py-10 font-inter relative">
      <main>
        <ProfileCard />
      </main>
      <p className="text-xs absolute text-white bottom-0">
        Challenge by{" "}
        <a className="font-bold text-futuristic-green" href="https://www.frontendmentor.io/" target="_blank">
          Frontend Mentor.{" "}
        </a>{" "}
        Coded by{" "}
        <a className="font-bold text-futuristic-green" href="https://github.com/pedrogl1990" target="_blank">
          Pedro Leite.
        </a>
      </p>
    </div>
  );
};

export default App;
