import pytest

from src import API

@pytest.mark.asyncio
async def test_api_get_pokemon():
    api = API()

    res = api.get_pokemon()

    assert res.statusCode == 0