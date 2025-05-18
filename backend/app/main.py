from fastapi import FastAPI, Depends
from . import crud, models, schemas
from .database import SessionLocal, engine
from sqlalchemy.orm import Session

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/feedback")
def submit_feedback(feedback: schemas.FeedbackCreate, db: Session = Depends(get_db)):
    return crud.create_feedback(db, feedback)

@app.get("/admin")
def view_feedbacks(db: Session = Depends(get_db)):
    return crud.get_feedbacks(db)
