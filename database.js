import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("cornor_shop");

export async function createShopsTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Shops (id integer primary key not null, uuid integer, shopname text, address varchar, reviews varchar);"
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
          "create table if not exists Menuitems (id integer primary key not null, shopid integer, item text, description text, price text, discounted);"
        );
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
          "insert into menuitems (uuid, shopname,  address, reviews) values (?, ?, ?, ?)",
          [uuid, shopname, address, reviews]
        );
        console.log("inserted shop details", uuid, shopname, address, reviews);
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
  description,
  price,
  discounted
) {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into menuitems (uuid, shopid, item, description, price, discounted) values (?, ?, ?, ?,?,?)",
          [uuid, shopid, item, description, price, discounted]
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
          console.log("rows", rows._array);
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
        // console.log("rows", rows._array);
        resolve(rows._array);
      });
    });
  });
}
