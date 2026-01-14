const drops = [
    { 
        name: "Poseidon", 
        rate: new Decimal ('1e10'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(212, 51, 40),rgb(194, 171, 43),rgb(43, 189, 194))",
        bonuses: ["x1k Luck", "x60k XP", "x400 Fire", "x20 Plasma", "x4 Rune Bulk"]
    },
    { 
        name: "Celestial", 
        rate: new Decimal('1e11'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(99, 0, 112),rgb(66, 8, 73),rgb(99, 0, 112),rgb(66, 8, 73))",
        bonuses: ["x6k Luck", "x200k XP", "x200 Plasma", "x4 Rune Bulk"]
    },
    { 
        name: "Prismatic Slime", 
        rate: new Decimal('1e15'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #4a0000, #6b0000)",
        bonuses: ["x3 Rune Luck", "x10 Frost"]
    },
    { 
        name: "Absolute Zero", 
        rate: new Decimal('2.5e21'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #4a0000, #6b0000)",
        bonuses: ["x10k Luck", "x5k XP", "x40 Snow", "x40 Frost", "x4 Rune Bulk", "x4 Rune Speed", "x4 Rune Luck"]
    },
    { 
        name: "Eternal Ice", 
        rate: new Decimal('5e25'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #4a0000, #6b0000)",
        bonuses: ["x10k Luck", "x5k XP", "x40 Frost", "x4 Rune Bulk", "x4 Rune Speed"]
    },
    { 
        name: "Crystal", 
        rate: new Decimal('2.1e33'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #4a0000, #6b0000)",
        bonuses: ["x100k Luck", "x00k XP", "x400 Plasma", "x20 Snowflakes", "x4 Rune Bulk", "x6 Rune Speed"]
    },
    { 
        name: "Cosmic Ice", 
        rate: new Decimal('2.5e40'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #8b3a3a, #a05050)",
        bonuses: ["x? Luck", "x100B XP", "x100 Snowflake", "x4 Rune Bulk", "x8 Rune Speed", "x5 Rune Luck"]
    },
    { 
        name: "Genesis Slime", 
        rate: new Decimal('7.5e41'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #8b3a3a, #a05050)",
        bonuses: ["x? Luck", "x? XP", "x24k Plasma", "x1k Snowflake", "x10 Rune Speed", "x2.5 Rune Luck"]
    },
    { 
        name: "Hellstorm Core", 
        rate: new Decimal('1.5e43'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg, #4a2c5a, #5a3c6a)",
        bonuses: ["x? Luck", "x? XP", "x4k Snowflake", "x2 Rune Luck", "x6 Rune Speed"]
    }
];

const NUMBER_UNITS = [
    { suffix: 'Du', value: new Decimal('1e333') },
    { suffix: 'NoCe', value: new Decimal('1e330') },
    { suffix: 'OcCe', value: new Decimal('1e327') },
    { suffix: 'SpCe', value: new Decimal('1e324') },
    { suffix: 'SxCe', value: new Decimal('1e321') },
    { suffix: 'QnCe', value: new Decimal('1e318') },
    { suffix: 'QdCe', value: new Decimal('1e315') },
    { suffix: 'TCe', value: new Decimal('1e312') },
    { suffix: 'DCe', value: new Decimal('1e309') },
    { suffix: 'UCe', value: new Decimal('1e306') },
    { suffix: 'Ce', value: new Decimal('1e303') },
    { suffix: 'NoNg', value: new Decimal('1e300') },
    { suffix: 'OcNg', value: new Decimal('1e297') },
    { suffix: 'SpNg', value: new Decimal('1e294') },
    { suffix: 'SxNg', value: new Decimal('1e291') },
    { suffix: 'QnNg', value: new Decimal('1e288') },
    { suffix: 'QdNg', value: new Decimal('1e285') },
    { suffix: 'TNg', value: new Decimal('1e282') },
    { suffix: 'DNg', value: new Decimal('1e279') },
    { suffix: 'UNg', value: new Decimal('1e276') },
    { suffix: 'Ng', value: new Decimal('1e273') },
    { suffix: 'NoOg', value: new Decimal('1e270') },
    { suffix: 'OcGg', value: new Decimal('1e267') },
    { suffix: 'SpOg', value: new Decimal('1e264') },
    { suffix: 'SxOg', value: new Decimal('1e261') },
    { suffix: 'QnOg', value: new Decimal('1e258') },
    { suffix: 'QdOg', value: new Decimal('1e255') },
    { suffix: 'TOg', value: new Decimal('1e252') },
    { suffix: 'DOg', value: new Decimal('1e249') },
    { suffix: 'UOg', value: new Decimal('1e246') },
    { suffix: 'Og', value: new Decimal('1e243') },
    { suffix: 'NoSg', value: new Decimal('1e240') },
    { suffix: 'OcSg', value: new Decimal('1e237') },
    { suffix: 'SpSg', value: new Decimal('1e234') },
    { suffix: 'SxSg', value: new Decimal('1e231') },
    { suffix: 'QnSg', value: new Decimal('1e228') },
    { suffix: 'QdSg', value: new Decimal('1e225') },
    { suffix: 'TSg', value: new Decimal('1e222') },
    { suffix: 'DSg', value: new Decimal('1e219') },
    { suffix: 'USg', value: new Decimal('1e216') },
    { suffix: 'Sg', value: new Decimal('1e213') },
    { suffix: 'Nosg', value: new Decimal('1e210') },
    { suffix: 'Ocsg', value: new Decimal('1e207') },
    { suffix: 'Spsg', value: new Decimal('1e204') },
    { suffix: 'Sxsg', value: new Decimal('1e201') },
    { suffix: 'Qnsg', value: new Decimal('1e198') },
    { suffix: 'Qdsg', value: new Decimal('1e195') },
    { suffix: 'Tsg', value: new Decimal('1e192') },
    { suffix: 'Dsg', value: new Decimal('1e189') },
    { suffix: 'Usg', value: new Decimal('1e186') },
    { suffix: 'sg', value: new Decimal('1e183') },
    { suffix: 'NoQg', value: new Decimal('1e180') },
    { suffix: 'OcQg', value: new Decimal('1e177') },
    { suffix: 'SpQg', value: new Decimal('1e174') },
    { suffix: 'SxQg', value: new Decimal('1e171') },
    { suffix: 'QnQg', value: new Decimal('1e168') },
    { suffix: 'QdQg', value: new Decimal('1e165') },
    { suffix: 'TQg', value: new Decimal('1e162') },
    { suffix: 'DQg', value: new Decimal('1e159') },
    { suffix: 'UQg', value: new Decimal('1e156') },
    { suffix: 'Qg', value: new Decimal('1e153') },
    { suffix: 'Noqg', value: new Decimal('1e150') },
    { suffix: 'Ocqg', value: new Decimal('1e147') },
    { suffix: 'Spqg', value: new Decimal('1e144') },
    { suffix: 'Sxqg', value: new Decimal('1e141') },
    { suffix: 'Qnqg', value: new Decimal('1e138') },
    { suffix: 'Qdqg', value: new Decimal('1e135') },
    { suffix: 'Tqg', value: new Decimal('1e132') },
    { suffix: 'Dqg', value: new Decimal('1e129') },
    { suffix: 'Uqg', value: new Decimal('1e126') },
    { suffix: 'qg', value: new Decimal('1e123') },
    { suffix: 'NoTg', value: new Decimal('1e120') },
    { suffix: 'OcTg', value: new Decimal('1e117') },
    { suffix: 'SpTg', value: new Decimal('1e114') },
    { suffix: 'SxTg', value: new Decimal('1e111') },
    { suffix: 'QnTg', value: new Decimal('1e108') },
    { suffix: 'QdTg', value: new Decimal('1e105') },
    { suffix: 'TTg', value: new Decimal('1e102') },
    { suffix: 'DTg', value: new Decimal('1e99') },
    { suffix: 'UTg', value: new Decimal('1e96') },
    { suffix: 'Tg', value: new Decimal('1e93') },
    { suffix: 'NoVg', value: new Decimal('1e90') },
    { suffix: 'OcVg', value: new Decimal('1e87') },
    { suffix: 'SpVg', value: new Decimal('1e84') },
    { suffix: 'SxVg', value: new Decimal('1e81') },
    { suffix: 'QnVg', value: new Decimal('1e78') },
    { suffix: 'QdVg', value: new Decimal('1e75') },
    { suffix: 'TVg', value: new Decimal('1e72') },
    { suffix: 'DVg', value: new Decimal('1e69') },
    { suffix: 'UVg', value: new Decimal('1e66') },
    { suffix: 'Vg', value: new Decimal('1e63') },
    { suffix: 'NoDe', value: new Decimal('1e60') },
    { suffix: 'OcDe', value: new Decimal('1e57') },
    { suffix: 'SpDe', value: new Decimal('1e54') },
    { suffix: 'SxDe', value: new Decimal('1e51') },
    { suffix: 'QnDe', value: new Decimal('1e48') },
    { suffix: 'QdDe', value: new Decimal('1e45') },
    { suffix: 'TDe', value: new Decimal('1e42') },
    { suffix: 'DDe', value: new Decimal('1e39') },
    { suffix: 'UDe', value: new Decimal('1e36') },
    { suffix: 'De', value: new Decimal('1e33') },
    { suffix: 'No', value: new Decimal('1e30') },
    { suffix: 'Oc', value: new Decimal('1e27') },
    { suffix: 'Sp', value: new Decimal('1e24') },
    { suffix: 'Sx', value: new Decimal('1e21') },
    { suffix: 'Qn', value: new Decimal('1e18') },
    { suffix: 'Qd', value: new Decimal('1e15') },
    { suffix: 'T', value: new Decimal('1e12') },
    { suffix: 'B', value: new Decimal('1e9') },
    { suffix: 'M', value: new Decimal('1e6') },
    { suffix: 'k', value: new Decimal('1e3') }
];

let lastDisplayedRPS = new Decimal(0);
let currentRPS = new Decimal(0);
let playerLuck = 1;
let runeClones = 1;

function updateRuneClones() {
    const runeCloneInput = document.getElementById('runeCloneInput');
    runeClones = new Decimal(runeCloneInput.value) || new Decimal(1);
    parseRate();
}

function updateLuck() {
    const luckInput = document.getElementById('luckInput');
    playerLuck = new Decimal(luckInput.value);
    renderDrops();
}

function parseRPSInput(input) {
    if (!input) return null;

    input = input.toLowerCase().replace(/\s/g, '');

    for (const unit of NUMBER_UNITS) {
        const suffix = unit.suffix.toLowerCase();
        if (input.endsWith(suffix)) {
            const num = new Decimal(input.slice(0, -suffix.length));
            return num.mul(unit.value);
        }
    }

    return new Decimal(input);
}

function parseRate() {
    const input = document.getElementById('rateInput');
    const parsedEl = document.getElementById('parsedRate');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        currentRPS = parsed;

        const rpsWithClone = currentRPS;
        const rpsWithoutClone = currentRPS.div(runeClones);

        parsedEl.innerHTML = `
            <div><strong>RPS with Rune Clone:</strong> ${formatDisplayNumber(rpsWithClone)}</div>
            <div><strong>RPS without Rune Clone:</strong> ${formatDisplayNumber(rpsWithoutClone)}</div>
        `;

        localStorage.setItem('savedRPS', parsed.toString());
    } else {
        parsedEl.textContent = '';
        currentRPS = new Decimal(0);
    }

    renderDrops();
}

function formatTime(seconds) {
    if (seconds instanceof Decimal) {
        if (!seconds.isFinite()) return 'Infinite';
        seconds = seconds.toNumber();
    }
    const timeUnit = document.getElementById('timeUnitSelect').value;

    if (isNaN(seconds) || !isFinite(seconds)) return 'Infinite';

    // Check if under 0.5 seconds in auto format
    if (timeUnit === 'auto' && seconds < 0.5) {
        return 'Instant';
    }
    
    // Check if over 10 years (315,360,000 seconds)
    if (timeUnit === 'auto' && seconds > 315360000) {
        let message;

        if (seconds > 3.1536e11) { // More than 10k years
            message = "Crazy... That's beyond comprehension!";
        } else if (seconds > 3.154e9) { // More than 100 years
            message = "A century or more... Forget it!";
        } else if (seconds > 3.154e7) { // More than 10 years
            message = "You would need years...";
        } else {
            message = "A long time... but possible.";
        }

        return message;
    }

    // Continue with the rest of your time formatting
    if (timeUnit === 'seconds') {
        return `${seconds.toFixed(2)} seconds`;
    } else if (timeUnit === 'minutes') {
        return `${(seconds / 60).toFixed(2)} minutes`;
    } else if (timeUnit === 'hours') {
        return `${(seconds / 3600).toFixed(2)} hours`;
    }

    // Auto format with proper units
    if (seconds < 1) {
        return `${(seconds * 1000).toFixed(0)} ms`;
    }
    if (seconds < 60) {
        return `${seconds.toFixed(1)} seconds`;
    }
    if (seconds < 3600) {
        // Show minutes and seconds
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}m ${secs}s`;
    }
    if (seconds < 86400) {
        // Show hours and minutes
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${mins}m`;
    }
    if (seconds < 604800) {
        // Show days and hours
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        return `${days}d ${hours}h`;
    }
    if (seconds < 2592000) {
        // Show weeks and days
        const weeks = Math.floor(seconds / 604800);
        const days = Math.floor((seconds % 604800) / 86400);
        return `${weeks}w ${days}d`;
    }
    if (seconds < 31536000) {
        // Show months
        const months = (seconds / 2592000).toFixed(1);
        return `${months} months`;
    }
    // Show years
    const years = (seconds / 31536000).toFixed(1);
    return `${years} years`;
}

function formatIdleDecimal(dec) {
    for (const unit of NUMBER_UNITS) {
        if (dec.gte(unit.value)) {
            const v = dec.div(unit.value);
            return v.toFixed(v.lt(10) ? 2 : 1) + unit.suffix;
        }
    }
    return dec.toFixed(0);
}

function formatScientificDecimal(dec) {
    const exp = dec.logarithm(10).floor();
    const mantissa = dec.div(new Decimal(10).pow(exp));
    return mantissa.toFixed(2) + 'e' + exp.toString();
}

function formatDisplayNumber(num) {
    if (!(num instanceof Decimal)) num = new Decimal(num);

    // Hybrid notation
    if (num.gte('1e63')) {
        return formatScientificDecimal(num);
    }

    return formatIdleDecimal(num);
}

function formatFullNumber(num) {
    return num.toLocaleString('en-US');
}

function normalizeRateInput() {
    const input = document.getElementById('rateInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.isFinite() && parsed.gt(0)) {
        input.value = formatIdleDecimal(parsed);
    }
}

function animateNumber(el, from, to, duration = 300) {
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const current = from.plus(to.minus(from).mul(progress));

        el.textContent = formatDisplayNumber(current);

        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}

function renderDrops() {
    const dropList = document.getElementById('dropList');
    const filterText = document.getElementById('filterInput').value.toLowerCase();
    const hideInstant = document.getElementById('hideInstant').checked;
    const sortType = document.getElementById('sortSelect').value;
    
    let filteredDrops = drops.filter(drop => 
        drop.name.toLowerCase().includes(filterText)
    );

    // Sort drops
    if (sortType === 'recommended') {
        const order = ['Eternal', 'Oblivion', 'Umbralith', 'Nuclear', 'Aeros'];
        filteredDrops.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
    } else if (sortType === 'easiest') {
        filteredDrops.sort((a, b) => a.rate - b.rate);
    } else if (sortType === 'hardest') {
        filteredDrops.sort((a, b) => b.rate - a.rate);
    }

    dropList.innerHTML = '';
    
    filteredDrops.forEach(drop => {
        const dropItem = document.createElement('div');
        dropItem.className = 'drop-item';
        
        let time = 'Set RPS above';
        let adjustedRate = drop.rate;
        
        if (currentRPS.gt(0)) {
            adjustedRate = drop.rate.div(playerLuck);
            adjustedRPS = currentRPS.div(runeClones);
            const seconds = adjustedRate.div(adjustedRPS);
            time = formatTime(seconds);

            if (hideInstant && seconds < 1) {
                return;
            }
        }
        
        const bonusesHTML = drop.bonuses.map(bonus => 
            `<span class="bonus-tag">${bonus}</span>`
        ).join('');
        
        dropItem.innerHTML = `        
            <div class="drop-info">
                <h4 style="color: #fff; font-weight: 700;">${drop.name}</h4>
                <div class="drop-rate">${`1 / ${formatDisplayNumber(adjustedRate)}`}</div> <!-- Probabilidad ajustada -->
                <div class="bonuses-list">${bonusesHTML}</div>
            </div>
            <div class="time-estimate">${time}</div>
        `;
        
        dropItem.style.setProperty('background', drop.color);
        dropItem.style.setProperty('border-color', 'rgba(255, 255, 255, 0.2)');
        
        dropList.appendChild(dropItem);
    });

    if (filteredDrops.length === 0) {
        dropList.innerHTML = '<p style="text-align: center; color: #9ca3af; padding: 40px;">No runes found</p>';
    }
}

window.addEventListener('load', () => {
    const saved = localStorage.getItem('savedRPS');
    if (saved) {
        currentRPS = new Decimal(saved);
        document.getElementById('rateInput').value = formatIdleDecimal(currentRPS);
        lastDisplayedRPS = currentRPS;
        parseRate(); // Asegurarse de que se actualicen todos los valores
    }
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName + '-tab').style.display = 'block';
    event.target.classList.add('active');
}

// Initialize
renderDrops();