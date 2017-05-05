const InsertNote = (note) => {
    const option = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        },
        method: 'POST',
        body: JSON.stringify({note})//la chuoi go vao, truyen vao object va cho ra chuoi
    };

    return fetch('http://localhost:3000/insert', option)
}

export default InsertNote