// Número base para los sufijos
const BASE = new Decimal(10);

// Listas inspiradas en EternityNum3.lua
const Sets = ["k","M","B"];
const FirstOnes = ["","U","D","T","Qd","Qn","Sx","Sp","Oc","No"];
const SecondOnes = ["","De","Vt","Tg","qg","Qg","sg","Sg","Og","Ng"];
const ThirdOnes = ["","Ce","Du","Tr","Qa","Qi","Se","Si","Ot","Ni"];
const MultOnes = ["","Mi","Mc","Na","Pi","Fm","At","Zp","Yc","Xo","Ve","Me"];

function generateNumberUnits() {
    const units = [];

    Sets.forEach((set, i) => {
        const value = BASE.pow((i + 1) * 3); // k = 1e3, M = 1e6, B = 1e9
        units.push({ suffix: set, value });
    });

    for (let i = 0; i < FirstOnes.length; i++) {
        for (let j = 0; j < SecondOnes.length; j++) {
            for (let k = 0; k < ThirdOnes.length; k++) {
                const suffix = FirstOnes[i] + SecondOnes[j] + ThirdOnes[k];
                if (suffix === "") continue;
                const exponent = 3 + 3 * (i + j * FirstOnes.length + k * FirstOnes.length * SecondOnes.length);
                units.push({ suffix, value: BASE.pow(exponent) });
            }
        }
    }

    MultOnes.forEach((mult, idx) => {
        if (mult === "") return;
        const exponent = 3 + (FirstOnes.length * SecondOnes.length * ThirdOnes.length + idx) * 3;
        units.push({ suffix: mult, value: BASE.pow(exponent) });
    });

    units.sort((a, b) => b.value.minus(a.value).toNumber());

    return units;
}

const NUMBER_UNITS = generateNumberUnits();