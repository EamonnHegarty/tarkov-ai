// For now in testing just writing the messages to a json file
// when we are linking up the client and api with the ai chat this should be stored
// in our neon db using prisma and linked to a chat which is linked to a user

import { JSONFilePreset } from "lowdb/node";
import { v4 as uuidv4 } from "uuid";
import { AIMessage } from "./types";
import path from "path";

export type MessageWithMetadata = AIMessage & {
  id: string;
  createdAt: string;
};

type Data = {
  messages: MessageWithMetadata[];
};

export const addMetadata = (message: AIMessage) => {
  return {
    ...message,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
};

export const removeMetadata = (message: MessageWithMetadata) => {
  const { id, createdAt, ...rest } = message;
  return rest;
};

const defaultData: Data = {
  messages: [],
};

export const getDb = async () => {
  const dbPath = path.join(__dirname, "db.json");
  const db = await JSONFilePreset<Data>(dbPath, defaultData);

  return db;
};

export const addMessages = async (messages: AIMessage[]) => {
  const db = await getDb();
  db.data.messages.push(...messages.map(addMetadata));
  await db.write();
};

export const getMessages = async () => {
  const db = await getDb();
  return db.data.messages.map(removeMetadata);
};
