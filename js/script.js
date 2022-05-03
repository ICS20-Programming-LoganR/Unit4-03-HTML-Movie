// Created by: Logan Rodriguez
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

//constants
const RATED_R = 18
const PG_13 = 13
const G_RATED = 10

//function
function answer () {
  let sentence = ""
//user input
  let age = parseFloat(document.getElementById('age').value)

  //if else statements
  if (age >= RATED_R){
    sentence = "You are old enough to watch a Rated-R film alone."
  }
  else if (age >= PG_13) {
    sentence = "You are old enough to watch a PG-13 rated film alone."
  }
  else if (age >= G_RATED){
    sentence = "You are old enough to watch a G-rated film alone."
  }
  else {
    sentence = "You are not old enough to watch a film alone. Go get your parents."
  }
  //display the results
    document.getElementById('answer').innerHTML = sentence
}