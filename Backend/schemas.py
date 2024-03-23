from pydantic import BaseModel
from typing import Optional, List

class OrderModel(BaseModel):
    id:Optional[int]
    order_status:Optional[str]="IN-PROCESS"
    pizza:List[str]


class PizzaModel(BaseModel):
    id:Optional[int]
    pizzaname:str
    price:Optional[int]
    description:str
    

class OrderStatusModel(BaseModel):
    order_status:Optional[str]="IN-PROCESS"

    