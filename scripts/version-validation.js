/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const { spawn } = require('child_process');

const packageJson = require('../package.json');
const packages = ['@cds/angular', '@cds/core', '@cds/react', '@clr/eslint-plugin-clarity-adoption'];

console.log(`\nVerify that all packages are at the latest version and could be installed from NPM Registry.\n`);

Promise.all(
  packages.map(package => {
    const pkg = `${package}@${packageJson.version}`;

    return new Promise((resolve, reject) => {
      const npm = spawn('npm', ['install', `${pkg}`, '--dry-run']);

      console.log(`\tChecking ${pkg} ...`);

      npm.on('close', code => {
        if (code !== 0) {
          reject([pkg, 'npm install failed']);
        } else {
          resolve([pkg, 'npm install succeeded']);
        }
      });
    });
  })
)
  .then(result => {
    console.log(`\n`);
    result.forEach(res => {
      console.log(`\tOK : ${res[0]}`);
    });
    console.log('\n✅ Verification successful.');
  })
  .catch(error => {
    if (error && Array.isArray(error)) {
      console.log('\n\nOne or more packages failed verification.\n');
      console.log(`\tPackage: ${error[0]} was not found into NPM Registry`);
    }
    console.log('\n❌ Verification failed.');
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
