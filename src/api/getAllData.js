const getAll = () =>(
    fetch('http://localhost:3000/getData')
        .then(res => res.json())
)

export default getAll