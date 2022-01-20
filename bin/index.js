#!/usr/bin/env node

const program = require('commander');

// import function to list coffeee menu
const list = require('../lib/list');


/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List coffee menu') // command description. will help user understand use of this command when they use coffee-shop --help

    // function to execute when command is uses
    .action(function () {
        list();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);