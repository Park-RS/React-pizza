
from sqlalchemy import Column,Integer,Text,String,ForeignKey, DateTime, Table
from sqlalchemy_utils.types import ChoiceType
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy.sql import func

Base=declarative_base()

order_pizza_association = Table(
    'order_pizza',
    Base.metadata,
    Column('order_id', Integer, ForeignKey('orders.id')),
    Column('pizza_id', Integer, ForeignKey('pizza.id'))
)

class Pizza(Base):

    __tablename__='pizza'
    id=Column(Integer,primary_key=True)
    pizzaname=Column(String(25), unique=True)
    price=Column(Integer, default=250)
    description=Column(Text,nullable=True) 

    orders = relationship('Order', secondary=order_pizza_association, back_populates='pizza')


    
class Order(Base):
    ORDER_STATUSES=(
        ('IN-PROCESS','in-process'),('TRANSIT','transit'),('DELIVERED', 'delivered')
    )
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True)
    name = Column(DateTime, default=func.now())
    order_status = Column(ChoiceType(choices=ORDER_STATUSES))

    pizza = relationship('Pizza', secondary=order_pizza_association, back_populates='orders')




