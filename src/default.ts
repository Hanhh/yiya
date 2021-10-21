import inquirer from 'inquirer';
import autocompletePrompt from 'inquirer-autocomplete-prompt';

const versions = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Lichi', 'Grapefruit'];

inquirer.registerPrompt('autocomplete', autocompletePrompt);

function searchFood(answers: string, input: string) {
  input = input || '';
  return new Promise((resolve) => {
    resolve(versions.filter(x=>x.toLowerCase().includes(input.toLowerCase())))
  });
}

export function showVersionDialog() {
  inquirer.prompt({
    type: 'autocomplete',
    name: 'fruit',
    suggestOnly: true,
    message: 'What is your favorite fruit?',
    searchText: 'We are searching the internet for you!',
    emptyText: 'Nothing found!',
    default: versions[0],
    source: searchFood,
    pageSize: 10,
    validate: (val) => {
      return val ? true : 'Type something!';
    },
  }).then((answers: string) => {
    console.log(JSON.stringify(answers, null, 2));
  });
}
