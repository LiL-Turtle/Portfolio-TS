import { useState } from "react";
import './Video10.css'

export interface ITest {
        name: string;
        age: number;
        city: string;
    }

    interface IUser {
        name: string;
        age: number;
        city: string;
    }

interface IProps {
    defaultName?: string;
    defaultAge?: number | string;
    defaultCity?: string;
}

const Video10 = (props: IProps) => {

    const { defaultName, defaultAge, defaultCity } = props;
    
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);

    const [citySelected, setCitySelected] = useState<string>(city[0]);

    const [users, setUsers] = useState<IUser[]>([])



    const [test, setTest] = useState<ITest | null>(null);

    const [isShowBtn, setIsShowBtn] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const newUser = {
            name: name,
            age: age,
            city: citySelected
        }
        setUsers([...users, newUser]);
        setName('');
        setAge('');
    }

    const handleOnchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <div>Example video 10:  Bảo Thiên </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input 
                    type="text" 
                    value={name}
                    onChange={handleOnchangeName}
                    /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input 
                    type="text" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                    onChange={(e) => setCitySelected(e.target.value)}
                    >
                        {city.map(item => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input
                type="submit"
                value="Submit"
                onClick={handleSubmit} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;