from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:spgokul267@localhost/globetrotter_db"


engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_recycle=3600 # Keeps connection alive
)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)