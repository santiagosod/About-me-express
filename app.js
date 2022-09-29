const express = require('express');

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        name: "Daniel Ospina",
        age: 19,
        country: "Colombia"
    })
});

app.post('/metas', (request, response) => {
    response.status(200).json({
        hobbies: [
            "comer",
            "conducir",
            "jugar videojuegos"
        ]
    })
})

app.patch("/metas", (request, response) => {
    response.status(200).json({
        goals: [
            "adquirir experiencia laboral",
            "Llegar a un pusto laboral importante"
        ]
    })
})

app.put("/business", (request, response) => {
    response.status(200).json({
        entreprises: [
            "Microsoft",
            "Amazon",
            "Mercado Libre"
        ]
    })
})

app.listen(8000, () => {
    console.log("server started at port 8000");
});