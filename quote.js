import fs, { readFile, writeFile } from "node:fs/promises";
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

export async function addQuote(quoteText) {
  try {
    const quote = {
      id: uuidv4(),
      quoteText: quoteText,
    };
    const data = await readFile(fileName, "utf8");
    const parsedData = JSON.parse(data);
    parsedData.push(quote);
    await writeFile(fileName, JSON.stringify(parsedData), "utf-8");
    console.log("Data: " + parsedData);
    return quote;
  } catch (err) {
    console.log(err);
  }
}

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
