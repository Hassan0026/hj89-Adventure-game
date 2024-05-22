#! /usr/bin/env node

import inquirer from "inquirer";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your Name:"
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices: ["Bryan Fury", "Jin", "Marshall Law"]
    }
])

let p1 = new Player(player.name) 
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Bryan Fury"){
        let ask = await inquirer.prompt([
    {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Health drink", "Run for your Life.."]
    }
    ]);
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel <= 0) {
                console.log("You loose, Game over");
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel <= 0) {
                console.log("You Win");
                process.exit()
            }
        }
    }
    if(ask.opt == "Health drink"){
        p1.fuelIncrease()
        console.log(`You Drink Health drink Your Fuel is ${p1.fuel} `);
    }
    if(ask.opt == "Run for your Life.."){
        console.log("You loose, Game over");
        process.exit()
    }

    }

    //Jin
    if (opponent.select == "Jin"){
        let ask = await inquirer.prompt([
    {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Health drink", "Run for your Life.."]
    }
    ]);
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel <= 0) {
                console.log("You loose, Game over");
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel <= 0) {
                console.log("You Win");
                process.exit()
            }
        }
    }
    if(ask.opt == "Health drink"){
        p1.fuelIncrease()
        console.log(`You Drink Health drink Your Fuel is ${p1.fuel} `);
    }
    if(ask.opt == "Run for your Life.."){
        console.log("You loose, Game over");
        process.exit()
    }

    }

    //Marshall Law
    if (opponent.select == "Marshall Law"){
        let ask = await inquirer.prompt([
    {
        name: "opt",
        type: "list",
        message: "What would you like to do?",
        choices: ["Attack", "Health drink", "Run for your Life.."]
    }
    ]);
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(p1.fuel <= 0) {
                console.log("You loose, Game over");
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if(o1.fuel <= 0) {
                console.log("You Win");
                process.exit()
            }
        }
    }
    if(ask.opt == "Health drink"){
        p1.fuelIncrease()
        console.log(`You Drink Health drink Your Fuel is ${p1.fuel} `);
    }
    if(ask.opt == "Run for your Life.."){
        console.log("You loose, Game over");
        process.exit()
    }

    }
}

while(true)