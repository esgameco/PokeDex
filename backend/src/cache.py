import json

class Cache:
    def __init__(self, path: str=None):
        self.path = path
        self.data = {
            'pokemon': {},
            'ability': {},
            'item': {},
            'type': {},
            'move': {}
        }
    
    def is_in(self, type: str, id: str) -> bool:
        return id in self.data[type].keys()

    def get(self, type: str, id: str) -> any:
        return self.data[type][id]

    def set(self, type: str, id: str, value: any) -> None:
        self.data[type][id] = value
    
    def load(self, path: str=None) -> None:
        if not path:
            path = self.path
        
        with open(path, 'r') as file:
            self.data = json.load(file)
    
    def save(self, path: str=None) -> None:
        if not path:
            path = self.path

        with open(path, 'w') as file:
            json.dump(self.data, path, indent=4)
