import React, { useEffect, useRef, useState } from "react";
import "./NewPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
const NewPrompt = () => {
  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      {image.isLoading && <div>Image is Loading</div>}
      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          width="380"
          transformation={[{width: 380 }]}
        />
      )}
      <div className="endChat" ref={endRef}></div>
      <form action="" className="newForm">
        <Upload setImage={setImage} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything" />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
