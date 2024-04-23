import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("cornor_shop");

export async function createShopsTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Shops (id integer primary key not null, uuid integer, shopname text, address text, reviews text);"
        );
      },
      reject,
      resolve
    );
  });
}
export async function createMenuTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Menuitems (id integer primary key not null, shopid integer, item text, imagename text, description text, price text, discounted text);"
        );
      },
      reject,
      resolve
    );
  });
}
//show table columns
export async function showTableColumns() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("PRAGMA table_info(Menuitems);", [], (_, { rows }) => {
          console.log("table columns", rows._array);
        });
      },
      reject,
      resolve
    );
  });
}
//empty shops table
export async function emptyShopsTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("delete from Shops");
      },
      reject,
      resolve
    );
  });
}
export async function insertShopDetails(uuid, shopname, address, reviews) {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into Shops (uuid, shopname,  address, reviews) values (?, ?, ?, ?)",
          [uuid, shopname, address, reviews]
        );
        // console.log("inserted shop details", uuid, shopname, address, reviews);
      },
      reject,
      resolve
    );
  });
}
//empty menuitems table
export async function emptyMenuItemsTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("delete from Menuitems");
      },
      reject,
      resolve
    );
  });
}
export async function insertMenuItem(
  uuid,
  shopid,
  item,
  imagename,
  description,
  price,
  discounted
) {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into Menuitems (id, shopid, item, imagename, description, price, discounted) values (?, ?, ?, ?, ?, ?, ?)",
          [uuid, shopid, item, imagename, description, price, discounted]
        );
      },
      reject,
      resolve
    );
  });
}
export async function getShops() {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from Shops", [], (_, { rows }) => {
          resolve(rows._array);
        });
      },
      (err) => {
        console.log("Error in getting shops", err);
      },
      resolve
    );
  });
}
export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("select * from Menuitems", [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}
