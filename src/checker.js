import fs from "fs";

export const checkLH = () => {
    const lhs = fs.readdirSync("LH/");

    const errors = [];

    for (const oneLh of lhs) {
        const langs = fs.readdirSync(`LH/${oneLh}`);
        const byLangs = {};
        for (const oneLang of langs) {
            if (
                !fs.existsSync(`LH/${oneLh}/${oneLang}/index.md`) &&
                !fs.existsSync(`LH/${oneLh}/${oneLang}/index.mdx`)
            ) {
                errors.push({ file: `LH/${oneLh}/${oneLang}/index.md`, message: "Not Found" });
            }
            byLangs[oneLang] = fs.readdirSync(`LH/${oneLh}/${oneLang}/`);
        }
        const keys = Object.keys(byLangs);
        const first = byLangs[keys[0]];
        for (const key of keys) {
            if (byLangs[key].length !== first.length) {
                errors.push({
                    file: `LH/${oneLh}/${key}/`,
                    message: `Not the same number of articles (${keys[0]} vs ${key})`,
                });
            }
        }
    }
    return errors;
};
