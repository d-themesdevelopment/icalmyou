module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar", "ru"], 
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
}
