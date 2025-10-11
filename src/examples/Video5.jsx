import { use, useEffect, useState } from "react";

const Video5 = (props) => {

    const { name } = props;
    const [age, setAge] = useState(0);

    useEffect(() => {
        setAge(21);
    }, []);

    return (
        <div>
            My name is {name} | age = {age}
        </div>
    )

}

export default Video5;