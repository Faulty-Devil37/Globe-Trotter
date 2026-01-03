from sqlalchemy.orm import Session
from models import User, Trip
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