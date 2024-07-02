import httpx


class API:
    def __init__(self):
        self.BASE_URL = "https://pokeapi.co/api/v2"

    async def get_pokemon(self, param: str) -> dict:
        async with httpx.AsyncClient() as client:
            res = await client.get(f"{self.BASE_URL}/pokemon/{param}")
            if res.text == "Not Found":
                return {
                    "statusCode": 1,
                    "statusMessage": "Not Found",
                }

            data = res.json()
            return {
                "statusCode": 0,
                "statusMessage": "Success",
                "ability": data["abilities"],
                "name": data["name"].title(),
                "forms": data["forms"],
                "types": data["types"],
                "height": data["height"],
                "weight": data["weight"],
                "image": data["sprites"]["other"]["official-artwork"]["front_default"],
            }
