import fs, { readFile } from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
  try {
    const data = await readFile(fileName, "utf8");
    console.log("Data: " + data);
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log(err);
  }
}

export async function addQuote(quoteText) {}

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
