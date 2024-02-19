import React, { useState } from "react";
import styled from "styled-components";

function TvShowFacts({ show }) {
  const [showMore, setShowMore] = useState(false);

  const showMoreInformation = () => {
    let moreTrivia = [];
    moreTrivia.push(<p className="trivia">David Lynch, director of the previous Dune (1984), stated that he has "zero interest in Dune (2021)". He cited that his issues with the new movie have nothing to do with director Denis Villeneuve but with his own painful memories of making the 1984 version: "Because it was a heartache for me. It was a failure and I didn't have final cut. I've told this story a billion times. It's not the film I wanted to make. I like certain parts of it very much - but it was a total failure for me."</p>);
    moreTrivia.push(<p className="trivia">Composer Hans Zimmer is a big fan of the novel Dune, and turned down working with frequent collaborator Christopher Nolan on Tenet (2020) to score this film. For the same reason, Denis Villeneuve was the top choice but turned down the offer to direct the Bond film No Time to Die (2021).</p>);
    return moreTrivia;
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <TvShowFactsContainer>
      <h1 className="title">Details</h1>
      <div className="details">
        {show.episode_run_time != null && show?.episode_run_time?.length > 0 && (
        <div>
            <p className="detail">
            <b>Episode runtime:</b> {show?.episode_run_time?.length > 0 ? show?.episode_run_time[0] : ""} minutes
            </p>
        </div>
        )}
        {show.created_by != null && show?.created_by?.length > 0 && (
        <div>
            <p className="detail">
              <b>Created by:</b> {show?.created_by?.map((person) => person.name).join(", ")}
            </p>
        </div>
        )}
        <div>
          <p className="detail">
            <b>In production:</b> {show?.in_production? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Release date:</b> {show?.first_air_date}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Countries of origin:</b>{" "}
            {show?.production_countries?.map((prod) => prod.name).join(", ")}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Production companies:</b>{" "}
            {show?.production_companies?.map((prod) => prod.name).join(", ")}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Languages:</b>{" "}
            {show?.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(", ")}
          </p>
        </div>

        <div>
          <p className="detail">
            <b>Show status:</b> {show?.status}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Seasons number:</b> {show?.number_of_seasons}
          </p>
        </div>
        <div>
          <p className="detail">
            <b>Episodes number:</b> {show?.number_of_episodes}
          </p>
        </div>

        {show.next_episode_to_air && (
            <div>
              <p className="detail">
                <b>Next episode :</b> {show?.next_episode_to_air?.name}, airing on {show?.next_episode_to_air?.air_date}
                </p>
            </div>
          )}
      </div>
      <h1 className="title">Did you know</h1>
      <p className="trivia">
        Denis Villeneuve confirmed in a Vanity Fair article that his adaptation of Dune will be split into two films in order to ensure that the original story would be "preserved and not cut into a million pieces." However, contrary to the common practice of filming several installments back to back, only the first movie (which roughly covers the first half of the source novel) was greenlit and produced, with an optional sequel depending on how well the first film performed. A sequel was greenlit on the Tuesday after the film opened. According to production designer Patrice Vermette, the movie was originally supposed to end later in the story, but during pre-production, these final scenes were shifted to the sequel, meaning that some of the preparation for Dune: Part Two (2024) has already been done.
      </p>
      {showMore && showMoreInformation()}
      <button onClick={toggleShowMore} className="show_more_button">
        {showMore ? "View less" : "View more"}
      </button>
      </TvShowFactsContainer>
  );
}

const TvShowFactsContainer = styled.div`
  padding: 2% min(12%, 25em);
  color: var(--text-color);

  .title {
    grid-column: 1/-1;
    color: var(--text-color);
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .details{
    margin-left: 1em;
    margin-bottom: 1em;
  }

  .detail {
    display: inline-block;
  }

  .detail::after {
    content: "";
    display: block;
    height: 0.08em;
    width: 102%;
    background-color: var(--lightColor);
    border-radius: 1em;
    margin-top: 0.1em;
    margin-bottom: 1em;
  }

  .trivia{
    width: 100%;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  .show_more_button{
    margin-top: 1em;
    padding: 0.5em 1.5em;
    border-radius: 2em;
    font-size: 0.9em;
    background-color: transparent;
    color: var(--text-color);
    border: 0.125em solid var(--text-color);
    box-shadow: 0.125em 0.25em 0.2em 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  @media only screen and (min-width: 47em) {
    .show_more_button:hover{
        box-shadow: 0 0 0.5em 0.2em #f7f7f750;
    }
    .trivia{
      width: 80%;
    }
  }
`;

export default TvShowFacts;
