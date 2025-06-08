const chalk = require("chalk");

function printResume() {
  console.log(chalk.green.bold("Abhishek Ankush Ganapure"));
  console.log(chalk.blue("Full-Stack Developer | Data Science Enthusiast\n"));

  console.log(chalk.bold("Education:"));
  console.log("- B.E. in CSE (Data Science)");
  console.log("- Diploma in Computer Engineering\n");

  console.log(chalk.bold("Skills:"));
  console.log("- JavaScript, PHP, Python");
  console.log("- MERN, Flask");
  console.log("- Firebase, MySQL, MongoDB, AWS, Jenkins\n");

  console.log(chalk.bold("Projects:"));
  console.log("- Android Chat Application");
  console.log("- Data Integration and Automation Tool\n");

  console.log(chalk.bold("Experience:"));
  console.log("- Internship: Full Stack Developer at CashRish Fintech\n");

  console.log(
    chalk.gray("LinkedIn: https://linkedin.com/in/abhishek-ganapure/")
  );
}

module.exports = printResume;
