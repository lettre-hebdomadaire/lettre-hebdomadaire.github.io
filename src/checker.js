import fs from "fs";

export const checkLH = () => {
    const lhs = fs.readdirSync("LH/");

    const errors = [];

    for (const oneLh of lhs) {
        const langs = fs.readdirSync(`LH/${oneLh}`);
        const byLangs = {};
        for (const oneLang of langs) {
            if (oneLang.includes(".") || !(oneLang === "en" || oneLang === "fr")) {
                continue;
            }
            if (
                !fs.existsSync(`LH/${oneLh}/${oneLang}/index.md`) &&
                !fs.existsSync(`LH/${oneLh}/${oneLang}/index.mdx`)
            ) {
                errors.push({
                    file: `LH/${oneLh}/${oneLang}/index.md`,
                    message: "Not Found",
                    altUrl: ""
                });
            }
            byLangs[oneLang] = fs.readdirSync(`LH/${oneLh}/${oneLang}/`);
        }
        /*const keys = Object.keys(byLangs);
        const first = byLangs[keys[0]];
        for (const key of keys) {
            if (byLangs[key].length !== first.length) {
                errors.push({
                    file: `LH/${oneLh}/${key}/`,
                    message: `Not the same number of articles (${keys[0]} vs ${key})`,
                });
            }
        }*/

        const files = {}; // File name => [lang, lang, ...]
        for (const key of Object.keys(byLangs)) {
            for (const file of byLangs[key]) {
                if (!files[file]) {
                    files[file] = [];
                }
                files[file].push(key);
            }
        }
        // Check if all files are present in all languages
        for (const file of Object.keys(files)) {
            for (const lang of Object.keys(byLangs)) {
                if (!files[file].includes(lang)) {
                    const goodLang = files[file][0];
                    errors.push({
                        file: `LH/${oneLh}/${lang}/${file}`,
                        message: "Not Found",
                        altUrl: `${oneLh}/${goodLang}/${file.split(".")[0]}`
                    });
                }
            }
        }
        
    }
    return errors;
};
