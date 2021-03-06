module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
     plugins: [
      "inline-dotenv",
      [
        "module-resolver",
        {
         root:".",
         extensions:[
           ".js",
           ".jsx",
           ".tsx",
           ".ts",
           ".android.js",
           ".android.tsx",
           ".ios.js",
           ".ios.tsx"
         ],
          alias: {
            "@assets": "./src/assets",
            "@components":"./src/components",
            "@global":"./src/global",
            "@services":"./src/services",
            "@screens":"./src/screens",
            "@navigation":"./src/navigation",
            "@utils":"./src/utils",
          },
        },
      ],
    ],
  };
};
