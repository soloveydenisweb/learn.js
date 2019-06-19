// Сделайте генератор дразнилок, чтобы он создавал дразнилки такого типа: "У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]".

var randomHumanBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючий", "унылый", "дурацкий"];
var randomAnimalBodyParts = ["крылья", "морда", "хвост"];
var randomAnimals = ["мухи", "выдры", "мартышки", "крысы"];
// Выбор случайной части тела из массива randomHumanBodyParts:
var randomHumanBodyPart = randomHumanBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайной части тела животного из массива randomAnimalBodyParts:
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomAnimals:
var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// Соединяем случайные строки в предложение:
var randomInsult = ["У тебя", randomHumanBodyPart, "еще более", randomAdjective + ", чем", randomAnimalBodyPart, "у", randomAnimal + "!!!"].join(" ");
randomInsult;