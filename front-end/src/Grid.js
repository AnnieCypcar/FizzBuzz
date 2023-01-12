import './Grid.css';

const Grid = ({answers}) => {
    return (
        <div>
            {answers && answers.map((a, ai) => (
                <div className='container' key={a.num+ai}>
                    <h2>FizzBuzz of {a.num}</h2>
                    <div className='grid'>
                        {a && a?.fizzbuzz && a?.fizzbuzz?.map((fb, fbi) => (
                        <div key={a.num + fbi} className='item'>{fb}</div>
                        ))}
                    </div>
                </div>
          ))}
        </div>
    )
};

export default Grid;