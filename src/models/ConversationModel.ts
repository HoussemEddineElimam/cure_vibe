export interface ConversationModel{
    conversationId :number;
    senderId:number;
    reciverId:number;
    messages:MessageModel[];
}