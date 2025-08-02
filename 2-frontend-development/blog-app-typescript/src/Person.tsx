interface PersonProps{
    name: string;
    age: number;
    headshot?: string;
}


const Person = ({name, age, headshot}: PersonProps) => {
    return (
        <div>
            <h1>{name} | {age}</h1>
            <img src={headshot} />
        </div>
    );
};

export default Person;