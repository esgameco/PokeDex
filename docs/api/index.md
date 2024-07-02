# Pokemon

## Get Pokemon

`GET /api/pokemon/{param}`

```
response: {
    statusCode: int,
    statusMessage: string,
    abilities: list,
    forms: list,
    types: list,
    height: int,
    weight: int,
    image: string,
}

status: {
    0, Success;
    1, Not found;
}
```