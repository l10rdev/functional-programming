// dummy Code which is not executable
const flour = new Flour();
const salt = new Salt();
const sugar = new Sugar();
const yeast = new Yeast();
const milk = new Milk();
const butter = new Butter();
const egg = new Egg();

const zopf = Zopf.add(flour.get(500))
  .add(salt.get(12))
  .add(suger.get(12))
  .add(yeast.get(24))
  .add(milk.get(270))
  .kneed()
  .add(butter(80))
  .kneed()
  .rise()
  .brush()
  .rise()
  .brush()
  .beak();
