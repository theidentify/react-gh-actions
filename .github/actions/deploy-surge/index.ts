import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function main() {
  const token = core.getInput('token', {
    required: true,
    trimWhitespace: true,
  });
  const email = core.getInput('email', {
    required: true,
    trimWhitespace: true,
  });
  const distFolder = core.getInput('dist-folder', {
    required: false,
    trimWhitespace: true,
  });
  const domain = core.getInput('domain', {
    required: false,
    trimWhitespace: true,
  });
  const command = `npx surge --token ${token} --login ${email} ${distFolder} ${domain}`;
  return exec.exec(command);
}

main();
