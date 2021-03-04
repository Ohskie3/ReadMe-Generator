const fs = require('fs')
const inquirer = require('inquirer')




  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    }, {
      type: 'text',
      name: 'description',
      message: 'Describe your application'
    }, {
      type: 'text',
      name: 'install_instructions',
      message: 'What instructions are needed to install?'
    }, {
      type: 'text',
      name: 'usage',
      message: 'What is your app used for?'
    }, {
      type: 'text',
      name: 'contribution',
      message: 'What are your contribution guidelines?'
    }, {
      type: 'text',
      name: 'test',
      message: 'What test instructions do you have?'
    },
    {
      type: 'list',
      name: 'License',
      message: 'Choose a license you will be using',
      choices: ['Community', 'MIT', 'GNU GPL Lv3']
    }, {
      type: 'text',
      name: 'username',
      message: 'What is your GitHub username?'
    }, {
      type: 'text',
      name: 'email',
      message: 'What is your email'
    }
  ])
    .then(res => {
      console.log(res)
      let body = `
      # ${res.title}

      ## Description:
      ${res.description}

      ## Table of Contents:
      [Usage]()
      [Contributing]()
      [Install Instructions]()
      [Tests]()


      ## Installation
      ${res.install_instructions}

      ## Usage:
      ${res.usage}

      ## Contributing:
      ${res.contribution}

      ## Tests:
      ${res.test}

      
      ## Questions?
      [My GitHub](https://github.com/${res.username})
      [My Email](mailto: ${res.email})
      `
      fs.writeFile('newREADME.md', body, err => {
        if (err) {console.log(err)}
        console.log(body)
      })
    })
    .catch(err => console.log(err))


