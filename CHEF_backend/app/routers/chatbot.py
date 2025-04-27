from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_prompt import chatbot_response  # import the function

router = APIRouter()

class ChatbotRequest(BaseModel):
    message: str

@router.post("/chatbot/")
def chatbot_reply(data: ChatbotRequest):
    reply = chatbot_response(data.message)
    return {"response": reply}
