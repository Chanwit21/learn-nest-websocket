import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: "Bomb", message: "Hello World" }];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto,clientId: string) {
    const message = { ...createMessageDto,name: this.clientToUser[clientId] };
    this.messages.push(message);
    return message;
  }


  findAll() {
    return this.messages;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
