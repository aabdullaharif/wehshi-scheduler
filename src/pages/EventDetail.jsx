import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/eventdetail/:${id}`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    };

    fetchData().catch(console.error);
  }, [id]);

  return (
    <div className="container">
      <div className="bg-color"></div>

      <div className="detail-wrapper py-5">
        <div className="left-detail">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLouAOQ2tBpQjKUCSLMekSAm1cd6aNTkjlMA0K394&s"
              alt=""
            />
          </div>
          <div className="description">
            <h4>Event Description</h4>
            <p>
              Spend a week hacking with the MLH community at GHW Security Week!
              Global Hack Week takes place throughout the year to give you a
              chance to complete technical challenges, network with the
              community, enjoy fun live sessions, build technical projects, and
              make new memories.
            </p>
            <h4>Challenges and Points</h4>
            <p>
              Earn experience points for yourself by completing our challenges
              throughout GHW. Challenges aren’t the only way to earn points. You
              can also receive a point each time you check in for a live
              session, so the more you attend, the more points you’ll rack up.
              They can be as simple as posting on your social media or as
              advanced as building a project and creating a full demo video for
              it. We’ll leave it to you to choose which challenges you want to
              take on. Feel free to work collaboratively with others on these.
            </p>
          </div>
        </div>
        <div className="right-detail">
          <h4 className="title">Global Hack Week: Security Week</h4>
          <div className="company">Global Hack Week (GHW)</div>

          <div className="event-date">
            <i className="location-icon fa-solid fa-clock"></i>Monday June 5,
            2023
          </div>
          <div className="event-type">
            <i className="location-icon fa-sharp fa-solid fa-location-dot"></i>
            Event is hosted online
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
