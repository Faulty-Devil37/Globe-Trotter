from sqlalchemy.orm import Session
from sqlalchemy import func
from models import User, Trip, TripStop
from datetime import datetime   

def create_trip(db: Session, data: dict) :
    new_trip = Trip(
        user_id = data['user_id'],
        trip_name = data['trip_name'],
        start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date(),
        end_date = datetime.strptime(data['end_date'], '%Y-%m-%d').date()
    )
    db.add(new_trip)
    db.commit()
    db.refresh(new_trip)
    return new_trip

def add_new_stop(db : Session, data: dict ):

    highest_stop = db.query(func.max(TripStop.stop_order)).filter(TripStop.trip_id == data['trip_id']).scalar()
    
    new_stop = TripStop(
        trip_id = data['trip_id'],
        city = data['city'],
        start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date(),
        end_date = datetime.strptime(data['end_date'], '%Y-%m-%d').date(),
        stop_order = highest_stop + 1 if highest_stop != None else 1
    )

    db.add(new_stop)
    db.commit()
    db.refresh(new_stop)

    return new_stop