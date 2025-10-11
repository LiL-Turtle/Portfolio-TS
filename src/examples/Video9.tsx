import { useState } from "react";

const Video9 = () => {

    let [name, setName] = useState<string>("Bảo Thiên");
  
    return (
        <div>
            Video 9: My name is {name};
        </div>
    )
}
export default Video9;