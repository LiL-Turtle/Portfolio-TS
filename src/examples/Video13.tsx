interface IProps {
    name?: string;
    age?: number;
    address?: string;
}

const Video13 = (props: IProps) => {
    //props là javascript object
    const { name = "Turtle", age = 21, address = "Ho Chi Minh City" } = props;
    
    // const person = {
    //     name: 'Turtle',
    //     age: 21,
    //     address: 'Ho Chi Minh City'
    // }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring



    return (
        <div>
            Example in video 13 - Hello World with {name}
        </div>
    )
}

export default Video13;