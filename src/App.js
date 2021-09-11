import "./App.css";
import Video from "./Video";
import axios from "./axios.js";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/api/posts");
      setVideos(response.data);
    };
    fetchPost();
  }, []);
  console.log(videos);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video) => (
          <Video
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
