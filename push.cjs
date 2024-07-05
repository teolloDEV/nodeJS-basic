
const { exec } = require("child_process");

async function runCommand(cmd) {
    console.log('\x1b[32m%s\x1b[0m', "+ " + cmd);
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(`Error executing command: ${cmd}\n${error.message}`);
            } else {
                resolve(stdout);
            }
        });
    });
}

async function main() {
    try {
        const jakartaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
        const commitMessage = `Update at ${jakartaTime}`;


        await runCommand("git add .");
        await runCommand(`git commit -m "${commitMessage}"`);
        await runCommand("git push origin main");

        console.log("Deployment successful.");
    } catch (error) {
        console.error("Error:", error);
    }
}

main();

