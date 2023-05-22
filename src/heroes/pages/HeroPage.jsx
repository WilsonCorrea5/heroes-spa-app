import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const onNavigateBack = () => {
    nav(-1);
  };

  const hero = useMemo(()=> getHeroById(id), [id]);
  if (hero === undefined) return <Navigate to={"/"} />;

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={`./heroes/${id}.jpg`}
          alt={`Just a SuperHero called ${hero.superhero}`}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Real Name: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Hero Debut: </b> {hero.first_appearance}
          </li>
        </ul>
        <hr />
        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Back
        </button>
      </div>
    </div>
  );
};
