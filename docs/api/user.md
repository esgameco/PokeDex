# User

## Register

`POST /api/user/register`

```
request body {
    username: string,
    email: string,
    password: string
}

response: {
    statusCode: int,
    statusMessage: string
}

RegisterStatus: {
    0, Success;
    1, Email Found;
    2, Invalid Password;
    3, Unknown Error;
}
```

## Login

`POST /api/user/login`

```
request body {
    username: string,
    password: string
}

response: {
    statusCode: int,
    statusMessage: string
}

RegisterStatus: {
    0, Success;
    1, Email Found;
    2, Invalid Password;
    3, Unknown Error;
}
```