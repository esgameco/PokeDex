# Pokemon

## Get Pokemon

`GET /api/pokemon/{param}`

```
response: {
    statusCode: int,
    statusMessage: string,
    name: string,
    abilities: list {
        id: int,
        name: string,
        effect: string
    },
    types: list {
        id: int,
        name: string
    },
    stats: dict {
        hp: int,
        attack: int,
        defense: int,
        specialAttack: int,
        specialDefense: int,
        speed: int,
        height: int,
        weight: int,
    },
    image: string,
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```