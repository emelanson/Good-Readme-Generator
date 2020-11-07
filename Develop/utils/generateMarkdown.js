// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions/Contact](#questions/contact)



## Installation

${data.installation}


## Usage 

${data.usage}


## License

${data.license}


## Contributing

${data.contribution}

## Tests

${data.test}

## Questions/Contact

If you want to get in touch with me, my github is http://github.com/${data.username}, and my email is ${data.email}.


  `;
}

module.exports = generateMarkdown;
