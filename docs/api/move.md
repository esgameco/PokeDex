# Move

## Get Move

`GET /api/move/{param}`

```
response: {
    statusCode: int,
    statusMessage: string,
    name: string,
    effect: string,
    type: string,
    damageClass: string,
    power: int,
    accuracy: int,
    pp: int,
    priority: int,
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```