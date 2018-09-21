

export class String2HexCodeColor {
    defaultShadePercentage = -0.6;

    constructor(defaultShadePercentage?: number) {
        this.defaultShadePercentage = defaultShadePercentage;
    }

    shadeColor(color: string, percent: number) {
        if (!percent) {
            percent = this.defaultShadePercentage;
        }
        const f = parseInt(color.slice(1), 16);
        const t = percent < 0 ? 0 : 255;
        const p = percent < 0 ? percent * -1 : percent;
        const R = f >> 16;
        const G = f >> 8 & 0x00FF;
        const B = f & 0x0000FF;
        const result = '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
        return result;
    }

    stringToColor(str: string, shadePercentage?: number) {
        str = str + this.preHash(str).toString();
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let colour = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return this.shadeColor(colour, shadePercentage);
    }

    preHash(str: string) {
        {
            let hash = 0;
            if (str.length === 0) {
                return hash;
            }
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
    }
}
