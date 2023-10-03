import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Data movie
import styled from "styled-components";
import MovieState from "../movieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const MovieDetails = () => {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const url = location.pathname;
  // useEffect (to load the info of movie once )
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovies) => stateMovies.url === url
    );
    setMovie(currentMovie[0]);
    console.log(currentMovie[0]);
  }, [movies, url]);

  return (
    <Fragment>
      {movie && (
        <DetailsStyled
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {/**Award componante in same file  */}
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                key={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <img src={movie.secondaryImg} alt="movie" className="secondaryImg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum is simply dummy text of the printing and
            typesetting industryLorem Ipsum is simply dummy text of the printing
            and typesetting industry, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry Lorem Ipsum is simply dummy text
            of the printing and typesetting industryLorem Ipsum is simply dummy
            text of the printing and typesetting
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum is simply dummy text of the printing and
            typesetting industryLorem Ipsum is simply dummy text of the printing
            and typesetting industry, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry Lorem Ipsum is simply dummy text
            of the printing and typesetting industryLorem Ipsum is simply dummy
            text of the
          </p>
        </DetailsStyled>
      )}
    </Fragment>
  );
};

//Styled componants
const DetailsStyled = styled(motion.div)`
  color: white;
  padding: 5rem 8rem;
  .secondaryImg {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    border-radius: 8px;
  }
  /* p {
    text-align: center;
  } */
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 10vh;
  position: relative;

  h2 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: normal;
  }
  img {
    width: 100%;
    min-height: 60vh;
    object-fit: cover;
    border-radius: 8px;
  }
  @media (max-width: 900px) {
    padding-top: 0;
    h2 {
      position: relative;
      text-align: center;
    }
  }
`;
const Awards = styled.div`
  min-height: 60vh;
  margin: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
//Award componants Componante
const AwardStyled = styled.div`
  padding: 2rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

//Award componants
const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetails;
