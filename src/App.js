import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [loading, setLoading] = useState(true);
  const [scenes, setScenes] = useState([]);

  const fetchViews = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes?api_key=${
          process.env.REACT_APP_AIRTABLE_API_KEY
        }`
      );
      setScenes(data.records);
      console.log(data.records);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchViews();
  }, []);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <h2>Scenes</h2>
      {loading ? (
        <span>Fetching scenes....</span>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          {scenes.map(({ fields: { Name, Location, Attachments } }, i) => (
            <div key={i} style={{ maxWidth: "30%", width: "100%" }}>
              <h2>{Name}</h2>
              <p>{Location}</p>
              <div>
                <img
                  style={{ width: "100%" }}
                  alt={Name}
                  src={Attachments[0].thumbnails.large.url}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
