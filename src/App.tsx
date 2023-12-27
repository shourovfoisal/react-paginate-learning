import { useEffect, useState } from "react";
import "./App.css";
import { Images } from "./components/Images";

export type Image = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data: Image[]) => {
        setImages(data);
      });

    return () => {};
  }, []);

  return <Images data={images} />;
}

export default App;
