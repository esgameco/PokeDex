# Type

## Get Type

`GET /api/type/{param}`

```
response: {
    statusCode: int,
    statusMessage: string,
    name: string,
    damageClass: string,
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```