"""change identity

Revision ID: 8004cfab3129
Revises: 8089d805673e
Create Date: 2024-04-25 11:39:59.552908

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '8004cfab3129'
down_revision: Union[str, None] = '8089d805673e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('category', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.Identity(always=False, start=0),
               existing_nullable=False,
               autoincrement=True)
    op.alter_column('orders', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.Identity(always=False, start=0),
               existing_nullable=False,
               autoincrement=True)
    op.alter_column('orders', 'order_status',
               existing_type=postgresql.ENUM('inprocess', 'transit', 'delivered', name='enum'),
               type_=sa.Enum('inprocess', 'transit', 'delivered', name='statuses'),
               existing_nullable=False)
    op.alter_column('pizza', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.Identity(always=False, start=0),
               existing_nullable=False,
               autoincrement=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('pizza', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.text("nextval('pizza_id_seq'::regclass)"),
               existing_nullable=False,
               autoincrement=True)
    op.alter_column('orders', 'order_status',
               existing_type=sa.Enum('inprocess', 'transit', 'delivered', name='statuses'),
               type_=postgresql.ENUM('inprocess', 'transit', 'delivered', name='enum'),
               existing_nullable=False)
    op.alter_column('orders', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.text("nextval('orders_id_seq'::regclass)"),
               existing_nullable=False,
               autoincrement=True)
    op.alter_column('category', 'id',
               existing_type=sa.INTEGER(),
               server_default=None,
               existing_nullable=False,
               autoincrement=True)
    # ### end Alembic commands ###
