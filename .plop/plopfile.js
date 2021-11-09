module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Atomic Design component creation logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
      {
        type: 'list',
        name: 'level',
        message: 'Atomic Design level of the component please',
        choices: ['atoms', 'molecules', 'organisms', 'blocks']
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{level}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../components/{{level}}/{{pascalCase name}}/index.module.css',
        templateFile: 'templates/component.module.css.hbs',
      }
    ],
  })
}