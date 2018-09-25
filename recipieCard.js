let recipe={
    'title' : 'mole',
    'servings':2,
    'ingredients':['cumin','cinnamon','cocoa']
}
console.log(recipe.title)
console.log('servings : '+recipe.servings);
console.log('Ingredients : ');
for (let index = 0; index < recipe.ingredients.length; index++) {
    console.log('   '+recipe.ingredients[index])
    
}


