from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional, List
import models
import logic
from database import SessionLocal, engine 


# 1. INITIAL SETUP


# Create the database tables in MySQL if they don't exist
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="GlobeTrotter API")

# CORS POLICY (The Bridge to Frontend)

origins = [
    "http://localhost:5173", # Vite (Common for React)
    "http://localhost:3000", # React default
    "http://127.0.0.1:5173",
    "*"                      
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency: Get Database Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 2. PYDANTIC MODELS (The Envelopes)


class UserRegister(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class TripCreate(BaseModel):
    user_id: int
    trip_name: str
    start_date: str # Expecting "YYYY-MM-DD"
    end_date: str   # Expecting "YYYY-MM-DD"

class StopCreate(BaseModel):
    trip_id: int
    city: str
    start_date: str
    end_date: str

class ActivityCreate(BaseModel):
    trip_stop_id: int
    name: str
    description: Optional[str] = ""
    city: Optional[str] = ""
    cost: float = 0.0
    duration_hours: int = 1
    scheduled_time: Optional[str] = None 

class ExpenseCreate(BaseModel):
    trip_id: int
    category: str
    amount: float


# 3. THE API ROUTES (The Buttons)


@app.get("/")
def home():
    return {"message": "GlobeTrotter Backend is Running! 🌍✈️"}

# --- AUTH ROUTES ---

@app.post("/register/")
def register(user: UserRegister, db: Session = Depends(get_db)):
    result = logic.register_user(db, user.dict())
    if result.get("status") == "error":
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@app.post("/login/")
def login(user: UserLogin, db: Session = Depends(get_db)):
    result = logic.login_user(db, user.dict())
    if result.get("status") == "error":
        raise HTTPException(status_code=401, detail=result["message"])
    return result

# --- TRIP ROUTES ---

@app.post("/trips/")
def create_trip(trip: TripCreate, db: Session = Depends(get_db)):
    # logic.create_trip returns a Trip object, FastAPI converts it to JSON automatically
    return logic.create_trip(db, trip.dict())

@app.get("/trips/{user_id}")
def get_user_trips(user_id: int, db: Session = Depends(get_db)):
    # Returns all trips for the dashboard
    return db.query(models.Trip).filter(models.Trip.user_id == user_id).all()

@app.get("/trip/{trip_id}")
def get_trip_details(trip_id: int, db: Session = Depends(get_db)):
    # Returns the specific trip + its stops (via the relationship)
    trip = db.query(models.Trip).filter(models.Trip.id == trip_id).first()
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    return trip

# --- STOP ROUTES ---

@app.post("/stops/")
def add_stop(stop: StopCreate, db: Session = Depends(get_db)):
    return logic.add_new_stop(db, stop.dict())

@app.get("/stops/{trip_id}")
def get_stops(trip_id: int, db: Session = Depends(get_db)):
    # Returns stops in the correct order (1, 2, 3...)
    return db.query(models.TripStop).filter(models.TripStop.trip_id == trip_id).order_by(models.TripStop.stop_order).all()

# --- ACTIVITY & EXPENSE ROUTES ---

@app.post("/activities/")
def add_activity(activity: ActivityCreate, db: Session = Depends(get_db)):
    return logic.add_new_activity(db, activity.dict())

@app.post("/expenses/")
def add_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    return logic.add_manual_expense(db, expense.dict())



@app.get("/trip-breakdown/{trip_id}")
def get_breakdown(trip_id: int, db: Session = Depends(get_db)):
    
    return logic.get_trip_breakdown(db, trip_id)

@app.get("/popular-destinations/")
def get_popular(db: Session = Depends(get_db)):
    
    return logic.get_popular_destinations(db)