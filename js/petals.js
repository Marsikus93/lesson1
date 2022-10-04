function howMuchILoveYou(nbPetals) {
    let list = ["I love you", "a little", "a lot", "passionately",  "madly", "not at all"];

  return list[(nbPetals - 1) % list.length];


}
