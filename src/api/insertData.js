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
    .then(res => res.json()) //goi ve dang json, goi ve gi, thi lay ve gi
}

export default InsertNote