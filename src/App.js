import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4"
          channel="Yuashi"
          description="This is my cute pet snail"
          song="The Lazy Song-Bruno Mars"
          likes={5523}
          messages={550}
          shares={200}
        />
        <Video
          url="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
          channel="Yuashi"
          description="My Neko !!!"
          song="Meow Meow"
          likes={6880}
          messages={500}
          shares={880}
        />
      </div>
    </div>
  );
}

export default App;
