# Items

## Get Item

`GET /api/item/{param}`

```
response: {
    statusCode: int,
    statusMessage: string,
    effect: string,
    name: string
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```