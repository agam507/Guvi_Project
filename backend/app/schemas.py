from pydantic import BaseModel

class FeedbackCreate(BaseModel):
    name: str
    title: str
    feedback_type: str
    feedback: str

class FeedbackOut(FeedbackCreate):
    id: int

    class Config:
        from_attributes = True
