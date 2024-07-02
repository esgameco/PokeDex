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

LoginStatus: {
    0, Success;
    1, Username Not Found;
    2, Invalid Password;
    3, Unknown Error;
}
```

## Logout

`GET /api/user/logout`

```
response: {
    statusCode: int,
    statusMessage: string
}

status: {
    0, Success;
    1, Unknown Error;
}
```

## Profile

`GET /api/user/profile/{user_id}`

```
response: {
    statusCode: int,
    statusMessage: string,
    username: string,
    description: string,
}

status: {
    0, Success;
    1, Unknown Error;
}
```