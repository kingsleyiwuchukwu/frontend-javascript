/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a new row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get the new Row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update and delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
