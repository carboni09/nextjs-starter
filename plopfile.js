module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Add new React component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter Component name'
            },
            {
                type: 'list',
                name: 'addToIndex',
                message: 'Would you like to add component to index?',
                choices: ['Yes', 'No'],
                value: 'Yes'
            },
            {
                type: 'list',
                name: 'withStyle',
                message: 'Would you like to create component stylesheet',
                choices: ['Yes', 'No'],
                value: 'Yes'
            }
        ],
        actions: (data) => {
            let actions = []

            if (data.name) {
                //create file
                actions.push({
                    type: 'add',
                    path: 'src/components/{{pascalCase name}}/index.js',
                    templateFile: 'plop-templates/component.hbs'
                })
            }
            if (data.withStyle) {
                //create stylesheet
                actions.push({
                    type: 'add',
                    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                    templateFile: 'plop-templates/component-style.hbs'
                })
                //import styles into component
                actions.push({
                    type: 'append',
                    path: 'src/components/{{pascalCase name}}/index.js',
                    pattern: '//IMPORT ITEMS HERE//',
                    template: `import styles from './{{pascalCase name}}.module.css';`

                })
            }

            if (data.addToIndex === 'Yes') {
                //import file in index file
                actions.push({
                    type: 'append',
                    path: 'src/components/index.js',
                    pattern: '//IMPORT ITEMS HERE//',
                    template: `import {{pascalCase name}} from './{{pascalCase name}}';`

                })
                //export file from index file
                actions.push({
                    type: 'append',
                    path: 'src/components/index.js',
                    pattern: '//EXPORT ITEMS HERE//',
                    template: '{{pascalCase name}},'

                })
            }

            return actions

        }
    })

    plop.setGenerator('action-type', {
        description: 'Add a new redux action type',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter name'
            }
        ],
        actions: [
            {
                type: 'append',
                pattern: '//ADD NEW ACTION TYPES//',
                path: 'redux/actions/types.js',
                template: "export const {{constantCase name}} = '{{snakeCase name}}'"
            }
        ]
    })

    plop.setGenerator('reducer', {
        description: 'Add new Redux reducer',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter reducer name'
            },
            {
                type: 'list',
                name: 'withImmutable',
                message: 'Would you add an immutable library?',
                choices: ['Yes', 'No'],
                value: 'No'
            },
            {
                type: 'list',
                name: 'addToIndex',
                message: 'Would you like to add reducer to index?',
                choices: ['Yes', 'No'],
                value: 'Yes'
            }
        ],
        actions: (data) => {
            let actions = []

            if (data.withImmutable === 'Yes') {
                actions.push({
                    type: 'add',
                    path: 'redux/reducers/{{pascalCase name}}Reducer.js',
                    templateFile: 'plop-templates/reducer-immutable.hbs'
                })
            } else {
                actions.push({
                    type: 'add',
                    path: 'redux/reducers/{{pascalCase name}}Reducer.js',
                    templateFile: 'plop-templates/reducer.hbs'
                })
            }

            if (data.addToIndex === 'Yes') {
                actions.push({
                    type: 'append',
                    path: 'redux/reducers/index.js',
                    pattern: '//IMPORT ITEMS HERE//',
                    template: `import {{pascalCase name}}Reducer from './{{pascalCase name}}Reducer';`

                })
                actions.push({
                    type: 'append',
                    path: 'redux/reducers/index.js',
                    pattern: '//EXPORT ITEMS HERE//',
                    template: "{{lowerCase name}} : {{pascalCase name}}Reducer,"

                })
            }



            return actions

        }
    })
}