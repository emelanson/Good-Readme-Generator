// function to generate markdown for README
function generateMarkdown(data) {
  let badge = "!! PLACEHOLDER.  PLEASE INSERT LICENSE INFORMATION !!";

  if (data.license == "CC BY") {
    badge = "[![licensebuttons by](https://licensebuttons.net/l/by/3.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)"
  } else if (data.license == "GNU GPLv3") {
    badge = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)"
  } else if (data.license == "MIT") {
    badge = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
  }

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

${badge}

This project is covered under the ${data.license}.  Click the badge above to learn more.


## Contributing

${data.contribution}

## Tests

${data.test}

## Questions/Contact

If you want to get in touch with me, my github is http://github.com/${data.username}, and my email is ${data.email}.


  `;
}

module.exports = generateMarkdown;
