import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Dc Heroes</h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </>
  );
};
