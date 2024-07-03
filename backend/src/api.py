import httpx

from .cache import Cache

class API:
    def __init__(self, cache_path: str=None):
        self.BASE_URL = "https://pokeapi.co/api/v2"
        self.api_helper = APIHelper()
        self.cache = Cache(cache_path)

    async def get_pokemon(self, param: str, use_status: bool=False) -> dict:
        if self.cache.is_in('pokemon', param):
            return self.cache.get('pokemon', param)

        async with httpx.AsyncClient() as client:
            res = await client.get(f"{self.BASE_URL}/pokemon/{param}")
            if self.api_helper.check_errors(res):
                return self.api_helper.gen_error_response(res)

            data = res.json()
            obj = {
                "name": data["name"].title(),
                "abilities": [await self.get_ability(x['ability']['name']) for x in data["abilities"]],
                "types": [await self.get_type(x['type']['name']) for x in data["types"]],
                "stats": {
                    "hp": self.api_helper.get_stat(data['stats'], 'hp'),
                    "attack": self.api_helper.get_stat(data['stats'], 'attack'),
                    "defense": self.api_helper.get_stat(data['stats'], 'defense'),
                    "specialAttack": self.api_helper.get_stat(data['stats'], 'special-attack'),
                    "specialDefense": self.api_helper.get_stat(data['stats'], 'special-defense'),
                    "speed": self.api_helper.get_stat(data['stats'], 'speed'),
                    "height": data["height"],
                    "weight": data["weight"],
                },
                "image": data["sprites"]["other"]["official-artwork"]["front_default"],
            }

            self.cache.set('pokemon', param, obj)
            if use_status:
                return self.api_helper.add_status(obj)
            return obj
    
    async def get_ability(self, param: str, use_status: bool=False) -> dict:
        if self.cache.is_in('ability', param):  
            return self.cache.get('ability', param)

        async with httpx.AsyncClient() as client:
            res = await client.get(f"{self.BASE_URL}/ability/{param}")
            if self.api_helper.check_errors(res):
                return self.api_helper.gen_error_response(res)
            
            data = res.json()
            obj = {
                "name": self.api_helper.get_name(data['names']),
                "effect": self.api_helper.get_effect(data['effect_entries']),
            }

            self.cache.set('ability', param, obj)
            if use_status:
                return self.api_helper.add_status(obj)
            return obj
    
    async def get_type(self, param: str, use_status: bool=False) -> dict:
        if self.cache.is_in('type', param):  
            return self.cache.get('type', param)

        async with httpx.AsyncClient() as client:
            res = await client.get(f"{self.BASE_URL}/type/{param}")
            if self.api_helper.check_errors(res):
                return self.api_helper.gen_error_response(res)
            
            data = res.json()
            obj = {
                "name": self.api_helper.get_name(data['names']),
                "damageClass": data['move_damage_class']['name'].title(),
            }

            self.cache.set('type', param, obj)
            if use_status:
                return self.api_helper.add_status(obj)
            return obj

class APIHelper:
    def __init__(self):
        self.BASE_URL = "https://pokeapi.co/api/v2"

    def check_errors(self, res: any) -> bool:
        return res.text == "Not Found" or res.status_code != 200

    def gen_error_response(self, res: any) -> dict:
        if res.text == "Not Found":
            return {
                "statusCode": 1,
                "statusMessage": "Not Found",
            }
        return {
            "statusCode": 2,
            "statusMessage": "Unknown error",
        }

    def add_status(self, obj: dict) -> dict:
        return obj.update({
            "statusCode": 0,
            "statusMessage": "Success",
        })
    
    def get_stat(self, entries: list, stat: str) -> int:
        for entry in entries:
            if entry['stat']['name'] == stat:
                return entry['base_stat']
        return -1

    def get_effect(self, entries: list) -> str:
        return self._get_value(entries, 'effect')
    
    def get_name(self, entries: list) -> str:
        return self._get_value(entries, 'name')

    def _get_value(self, entries: list, specifier: str) -> str:
        for entry in entries:
            if entry['language']['name'] == 'en':
                return entry[specifier]
        return ''