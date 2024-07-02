# Favorite

## Favorite Entity

`POST /api/user/favorite/{type}/{id}`

```
response: {
    statusCode: int,
    statusMessage: string
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```

## Get Favorited Entity

`GET /api/user/favorite/{type}/{id}`

```
response: {
    statusCode: int,
    statusMessage: string,
    isFavorited: bool
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```


## Get Favorites

`GET /api/user/favorite/{user_id}`

```
response: {
    statusCode: int,
    statusMessage: string,
    favorites: list {
        type: int,
        id: int,
        name: string
    }
}

status: {
    0, Success;
    1, Not found;
    2, Unknown Error;
}
```