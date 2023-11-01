import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  Firestore, orderBy,
  query,
  updateDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messagesCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.messagesCollection = collection(this.firestore, 'messages');
  }

  getMessages() {
    const q = query(this.messagesCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Message[]>;
  }

  getMessageById(message: Message) {
    const messageDocumentReference = doc(this.firestore, `messages/${message.id}`);
    return docData(messageDocumentReference, {idField: 'id'});
  }

  addMessage(message: Message) {
    return addDoc(this.messagesCollection, message);
  }

  updateMessage(message: Message) {
    const messageDocumentReference = doc(this.firestore, `messages/${message.id}`);
    return updateDoc(messageDocumentReference, {...message});
  }

  deleteMessage(message: Message) {
    const messageDocumentReference = doc(this.firestore, `messages/${message.id}`);
    return deleteDoc(messageDocumentReference);
  }
}
