from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime, timezone

Base = declarative_base()

# Users table
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(200), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    created_at = Column(TIMESTAMP, default=lambda: datetime.now(timezone.utc))
    trips = relationship("Trip", back_populates="user")


# Trips table
class Trip(Base):
    __tablename__ = 'trips'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    trip_name = Column(String(100), nullable=False)
    start_date = Column(Date)
    end_date = Column(Date)
    description = Column(Text)
    cover_photo = Column(String(255))
    created_at = Column(TIMESTAMP, default=lambda: datetime.now(timezone.utc))
    user = relationship("User", back_populates="trips")
    stops = relationship("TripStop", back_populates="trip")
    budgets = relationship("Budget", back_populates="trip")
    shared_trips = relationship("SharedTrip", back_populates="trip")


# Trip Stops table
class TripStop(Base):
    __tablename__ = 'trip_stops'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trip_id = Column(Integer, ForeignKey('trips.id', ondelete='CASCADE'), nullable=False)
    city = Column(String(100), nullable=False)
    start_date = Column(Date)
    end_date = Column(Date)
    stop_order = Column(Integer)

    trip = relationship("Trip", back_populates="stops")
    activities = relationship("TripActivity", back_populates="trip_stop")


# Activities table
class Activity(Base):
    __tablename__ = 'activities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    city = Column(String(100))
    cost = Column(DECIMAL(10,2))
    duration_hours = Column(Integer)

    trip_activities = relationship("TripActivity", back_populates="activity")


# Trip Activities table
class TripActivity(Base):
    __tablename__ = 'trip_activities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trip_stop_id = Column(Integer, ForeignKey('trip_stops.id', ondelete='CASCADE'), nullable=False)
    activity_id = Column(Integer, ForeignKey('activities.id', ondelete='CASCADE'), nullable=False)
    scheduled_time = Column(DateTime)

    trip_stop = relationship("TripStop", back_populates="activities")
    activity = relationship("Activity", back_populates="trip_activities")


# Budgets table
class Budget(Base):
    __tablename__ = 'budgets'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trip_id = Column(Integer, ForeignKey('trips.id', ondelete='CASCADE'), nullable=False)
    category = Column(String(50))
    amount = Column(DECIMAL(10,2))

    trip = relationship("Trip", back_populates="budgets")


# Shared Trips table
class SharedTrip(Base):
    __tablename__ = 'shared_trips'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trip_id = Column(Integer, ForeignKey('trips.id', ondelete='CASCADE'), nullable=False)
    shared_with_email = Column(String(100))
    permission = Column(Enum('view','edit'), default='view')

    trip = relationship("Trip", back_populates="shared_trips")


# Admin Logs table
class AdminLog(Base):
    __tablename__ = 'admin_logs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    action = Column(String(255))
    user_id = Column(Integer, ForeignKey('users.id', ondelete='SET NULL'))
    created_at = Column(TIMESTAMP, default=lambda: datetime.now(timezone.utc))
