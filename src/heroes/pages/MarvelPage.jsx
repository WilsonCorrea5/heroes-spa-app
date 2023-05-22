import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Marvel Heroes</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
