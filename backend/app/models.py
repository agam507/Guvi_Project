from sqlalchemy import Column, Integer, String
from .database import Base

class Feedback(Base):
    __tablename__ = "feedbacks"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    title = Column(String)
    feedback_type = Column(String)
    feedback = Column(String)
