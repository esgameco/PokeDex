# Comment

## Post Comment

`POST /api/comment/{type}/{id}`

```
request body {
    comment: string
}

response: {
    statusCode: int,
    statusMessage: string
}

CommentStatus: {
    0, Success;
    1, Too Long;
    2, Too Short;
    3, Unknown Error;
}
```

## Get Comments (page)

`GET /api/comment/{type}/{id}`

```
response: {
    statusCode: int,
    statusMessage: string,
    comments: list {
        username: string,
        userId: int,
        comment: string
    }
}

status: {
    0, Success;
    1, Unknown Error;
}
```

## Get User Comments

`GET /api/user/comment/{user_id}`

```
response: {
    statusCode: int,
    statusMessage: string,
    comments: list
}

status: {
    0, Success;
    1, Unknown Error;
}
```