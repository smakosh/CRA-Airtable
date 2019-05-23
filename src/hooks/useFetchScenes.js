import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [loading, setLoading] = useState(true);
  const [scenes, setScenes] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchViews = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes?api_key=${
          process.env.REACT_APP_AIRTABLE_API_KEY
        }`
      );
      setScenes(data.records);
      setLoading(false);
    } catch (err) {
      setErrors(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchViews();
  }, []);

  return [loading, scenes, errors];
};
