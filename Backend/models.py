from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

# Users table
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(200), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

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
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

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
... (5 lines left)

Collapse
message.txt4 KB
from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

class Trip(Base):
    tablename = 'trips'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    trip_name = Column(String(100), nullable=False)
    start_date = Column(Date)
    end_date = Column(Date)
    description = Column(Text)
    cover_photo = Column(String(255))
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    user = relationship("User", back_populates="trips")
    stops = relationship("TripStop", back_populates="trip")
    budgets = relationship("Budget", back_populates="trip")
    shared_trips = relationship("SharedTrip", back_populates="trip")
Abhilash R
 — 
10:22 AM
from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

class User(Base):
    tablename = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(200), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    trips = relationship("Trip", back_populates="user")


class Trip(Base):
    tablename = 'trips'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    trip_name = Column(String(100), nullable=False)
    start_date = Column(Date)
    end_date = Column(Date)
Darshan S
 — 
10:24 AM
from models import Trip, ItineraryItem, User # Import Abhi's Tables
from sqlalchemy.orm import Session # Standard SQL tool

---------------------------------------------------
LOGIC BLOCK 1: CREATE TRIP
---------------------------------------------------
You don't worry about JSON. You just take variables.
def create_trip(db: Session, name: str, start_date, end_date, user_id: int):
    # 1. Create the Object
    new_trip = Trip(
        trip_name=name,
        start_date=start_date,
        end_date=end_date,
        user_id=user_id
    )

    Add & Commit (Standard SQLAlchemy)

    db.add(new_trip)
    db.commit()
    db.refresh(new_trip) # Get the new ID back

    return new_trip # Give the whole object back to Gokul
from flask import Flask, request, jsonify
from datetime import datetime
from models import db, Trip # <--- IMPORT ABHI'S WORK

app = Flask(name)

--- CONFIGURATION (Tell Flask where the DB file lives) ---
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///globetrotter.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

Connect Abhi's DB tool to your App
db.init_app(app)

Create the DB tables automatically
with app.app_context():
    db.create_all()

---------------------------------
LOGIC BLOCK 1: CREATE TRIP
---------------------------------
@app.route('/api/create-trip', methods=['POST'])
def create_trip():
    # 1. RECEIVE the JSON package from Arjun (Frontend)
    data = request.json 
    # Expecting: {"name": "Goa Trip", "start_date": "2026-01-20", "end_date": "2026-01-25", "user_id": 1}

    # 2. FORMAT (The tricky part!)
    # Arjun sends dates as "Strings" (Text). Abhi's DB needs "Date Objects".
    # strptime means "STRing Parse TIME"
    try:
        s_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date()
        e_date = datetime.strptime(data['end_date'], '%Y-%m-%d').date()
    except ValueError:
        return jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}), 400

    # 3. CONSTRUCT the Object
    new_trip = Trip(
        name=data['name'],
        start_date=s_date,
        end_date=e_date,
        user_id=data['user_id']
    )

    # 4. SAVE to the Vault
    db.session.add(new_trip) # Put it in the staging area
    db.session.commit()      # Lock it in the vault

    # 5. RETURN the success message
    return jsonify({
        "message": "Trip created successfully!",
        "trip_id": new_trip.id
    }), 201

if name == 'main':
    app.run(debug=True)
Abhilash R
 — 
10:38 AM
fastapi==0.115.6
uvicorn==0.34.0
sqlalchemy==2.0.45
pymysql==1.1.2
aiomysql==0.2.0
cryptography==46.0.3
python-dotenv==1.0.1
pydantic==2.10.4
pydantic-settings==2.7.1
﻿

from sqlalchemy import create_engine, Column, Integer, String, Text, DECIMAL, Date, DateTime, Enum, ForeignKey, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

# Users table
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(200), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

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
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

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
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

