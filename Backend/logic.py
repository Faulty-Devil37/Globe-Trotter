from sqlalchemy.orm import Session
from sqlalchemy import func
from models import User, Trip, TripStop, Activity,TripActivity,Budget,User
from datetime import datetime   
import auth

def register_user(db: Session, data: dict):
    existing_user = db.query(User).filter(User.email == data['email']).first()
    if existing_user:
        return {"status":"error", "message":"Email already registered"}
    
    hashed_password = auth.get_password_hash(data['password'])

    new_user = User(
        name = data['name'],
        email = data['email'],
        password_hash = hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)    

    return new_user

def login_user(db: Session, data: dict):
    email = data['email']
    password = data['password']

    user = db.query(User).filter(User.email == email).first()

    if not user :
        return {"status":"error", "message":"User not found"}
    
    if not auth.verify_password(password, user.password_hash):
        return {"status":"error", "message":"Incorrect password"}   
    
    return {"status":"success", "user_id": user.id, "name": user.name}

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

def add_new_activity(db: Session, data: dict):
    new_activity = Activity(
        name = data['name'],
        description = data.get('description', ''),
        city = data.get('city', ''),
        cost = data.get('cost', 0.0),
        duration_hours = data.get('duration_hours', 0)
    )

    db.add(new_activity)
    db.flush()

    new_link = TripActivity(
        trip_stop_id = data['trip_stop_id'],
        activity_id = new_activity.id,
        scheduled_time = datetime.strptime(data['scheduled_time'], '%Y-%m-%d %H:%M:%S') if 'scheduled_time' in data else datetime.now()
    )

    db.add(new_link)
    db.commit()
    db.refresh(new_activity)

    return new_activity

def add_manual_expense(db: Session, data: dict):
    new_budget = Budget(
        trip_id = data['trip_id'],
        amount = float(data['amount']),
        category = data['category'],
    )

    db.add(new_budget)
    db.commit()
    db.refresh(new_budget)

    return new_budget

def get_trip_breakdown(db: Session, trip_id: int):
    manual_total = db.query(func.sum(Budget.amount)).filter(Budget.trip_id == trip_id).scalar() or 0.0

    activity_total = db.query(func.sum(Activity.cost)).join(TripActivity).join(TripStop).filter(TripStop.trip_id == trip_id).scalar() or 0.0

    total_cost = manual_total + activity_total

    return {
        "trip_id": trip_id,
        "manual_expenses": manual_total,  
        "activity_expenses": activity_total, 
        "total_cost": total_cost          
    }

def get_popular_destinations(db: Session):
    results = db.query(
        TripStop.city, 
        func.count(TripStop.city).label('visit_count')
    ).group_by(TripStop.city)\
     .order_by(func.count(TripStop.city).desc())\
     .limit(5)\
     .all()

    popular_list = []
    for city, count in results:
        image_url = f"https://loremflickr.com/800/600/{city},city,view/all"  
        popular_list.append({
            "city": city,
            "visitors": count,
            "image": image_url 
        })
        
    return popular_list