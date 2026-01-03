from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(200), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    trips = relationship("Trip", back_populates="user")


class Trip(Base):
    __tablename__ = 'trips'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    trip_name = Column(String(100), nullable=False)
    start_date = Column(Date)
    end_date = Column(Date)
   
