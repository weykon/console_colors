const reset = "\x1b[0m";
const source = {
    text_bold: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    bg_black: "\x1b[40m",
    bg_red: "\x1b[41m",
    bg_green: "\x1b[42m",
    bg_yellow: "\x1b[43m",
    bg_blue: "\x1b[44m",
    bg_magenta: "\x1b[45m",
    bg_cyan: "\x1b[46m",
    bg_white: "\x1b[47m",
}

declare global {
    interface String {
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        bg_black: string;
        bg_red: string;
        bg_green: string;
        bg_yellow: string;
        bg_blue: string;
        bg_magenta: string;
        bg_cyan: string;
        bg_white: string;
        text_bold: string
    }
}

const colors = () => {
    for (const e in source) {
        Object.defineProperty(String.prototype, e, {
            get: function () {
                return `${source[e as keyof typeof source]}${this}${reset}`;
            }
        })
    }
}

export default colors();