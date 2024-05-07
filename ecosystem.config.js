module.exports = {
  apps: [
    {
      name: "excalidraw-room-app",
      script: "npm",
      args: "run start",
      cwd: ".",
      watch: [".", "!node_modules"],
    },
  ],
};
